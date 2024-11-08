import React from "react";
import { useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";
const HomePage = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    // try {
    //   const response = await invoke("handle_login_command");
    //   console.log(response);
    //   alert(response);
    // } catch (error) {
    //   console.error("Lỗi khi gọi Tauri:", error);
    // }
    navigate("/eth");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <p className="font-serif text-xl mb-4">Are you Michu.dev?</p>

      <div>
        <button
          onClick={handleLogin}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          <img
            src="/icons8-google-48.png"
            alt="Google Icon"
            style={{ width: "48px", height: "48px" }}
          />
        </button>
      </div>

      <p
        className="font-serif text-xl mb-4"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        You need to sign in with Google.
      </p>
    </div>
  );
};

export default HomePage;
