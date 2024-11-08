use rusqlite::{params, Connection};
use std::sync::Mutex;
use tauri::State;
use anyhow::Result;
use oauth2::{
    AuthUrl, ClientId, ClientSecret, DeviceAuthorizationUrl, Scope, TokenResponse, TokenUrl,
};
use oauth2::basic::BasicClient;
use oauth2::devicecode::StandardDeviceAuthorizationResponse;
use oauth2::reqwest::http_client;
use url::Url;
use dotenv::dotenv;
use std::env;

pub struct AdminController;

impl AdminController {
    pub fn login(
        _conn: State<Mutex<Connection>>,
        _email: String,
        _oauth_id: String,
    ) -> Result<String, String> {
        dotenv().ok();
    
        let client_id = ClientId::new(env::var("CLIENT_ID").map_err(|e| e.to_string())?);
        let client_secret = ClientSecret::new(env::var("CLIENT_SECRET").map_err(|e| e.to_string())?);
        let auth_url = AuthUrl::new(env::var("AUTH_URL").map_err(|e| e.to_string())?)
            .map_err(|e| e.to_string())?;
        let token_url = TokenUrl::new(env::var("TOKEN_URL").map_err(|e| e.to_string())?)
            .map_err(|e| e.to_string())?;
        let device_auth_url = DeviceAuthorizationUrl::new(env::var("DEVICE_AUTH_URL").map_err(|e| e.to_string())?)
            .map_err(|e| e.to_string())?;
    
        let client = BasicClient::new(
            client_id,
            Some(client_secret),
            auth_url,
            Some(token_url),
        )
        .set_device_authorization_url(device_auth_url);
    
        let details: StandardDeviceAuthorizationResponse = client
            .exchange_device_code()
            .map_err(|e| e.to_string())?
            .add_scope(Scope::new("read".to_string()))
            .request(http_client)
            .map_err(|e| e.to_string())?;
    
        println!(
            "Open this URL in your browser:\n{}\nand enter the code: {}",
            details.verification_uri().to_string(),
            details.user_code().secret().to_string()
        );
    
        let token_result = client
            .exchange_device_access_token(&details)
            .request(http_client, std::thread::sleep, None)
            .map_err(|e| e.to_string())?;
    
        Ok(token_result.access_token().secret().to_string())
    }
    
}
