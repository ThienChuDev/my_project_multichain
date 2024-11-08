#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod controllers;
mod models;
mod routers;

use routers::admin_router::handle_login_command;
use rusqlite::Connection;
use std::sync::Mutex;
use tauri::Builder;

fn main() {
    let conn = Connection::open("admin.db").expect("Failed to open database");

    Builder::default()
        .manage(Mutex::new(conn))
        .invoke_handler(tauri::generate_handler![
            handle_login_command
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
