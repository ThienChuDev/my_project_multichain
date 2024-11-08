use rusqlite::{ Connection, Result};
use serde::Serialize;




#[derive(Serialize)]
pub struct Admin {
    pub id: i32,
    pub email: String,
    pub oauth_id: String,
}

impl Admin {
   
    pub fn create_table(conn: &Connection) -> Result<()> {
        conn.execute(
            "CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                email TEXT NOT NULL,
                oauth_id TEXT NOT NULL
            )",
            [],
        )?;
        Ok(())
    }
 
}
