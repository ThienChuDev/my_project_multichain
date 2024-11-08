use crate::controllers::admin_controller::AdminController;
use rusqlite::Connection;
use tauri::{command, State};
use std::sync::Mutex;


#[tauri::command]
pub fn handle_login_command(
    conn: State<Mutex<Connection>>,
    email: String,
    oauth_id: String,
) -> Result<String, String> {
    AdminController::login(conn, email, oauth_id)
}
