import React, { useState } from "react";

const ControlETHPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tokenInfo] = useState({
    contract: "0xF0a4...",
    ownership: "Connected",
    name: "MicheETH",
    symbol: "MTKC",
    totalSupply: "1000000000 MTKC",
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "24px",
        maxWidth: "1200px",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        On-chain ETH
      </h2>
      <div style={{ display: "flex", gap: "24px" }}>
        {/* Left Column */}
        <div style={{ flex: "1" }}>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Create Token
            </h3>
            <input
              type="password"
              placeholder="Private Key (Owner)"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Name Token"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Symbol"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Total Supply"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Create
            </button>
          </div>

          {/* Smart Contract State Section */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Smart Contract State
            </h3>
            <input
              type="password"
              placeholder="Private Key (Owner)"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Smart Contract Address"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Call
            </button>
            <p style={{ fontSize: "0.875rem", color: "#333" }}>
              SmartContract: <span style={{ color: "#555" }}>0xF0a4...</span>
            </p>
            <p style={{ fontSize: "0.875rem", color: "#333" }}>
              Ownership: <span style={{ color: "#1D4ED8" }}>Connected</span>
            </p>
            <p style={{ fontSize: "0.875rem", color: "#333" }}>
              Name Token: MicheETH
            </p>
            <p style={{ fontSize: "0.875rem", color: "#333" }}>Symbol: MTKC</p>
            <p style={{ fontSize: "0.875rem", color: "#333" }}>
              Total Supply: 1000000000 MTKC
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Mint Token Section */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Mint Token
            </h3>
            <input
              type="text"
              placeholder="Enter amount"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Mint Tokens
            </button>
          </div>

          {/* Control Sell Section */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Control Sell
            </h3>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                style={{
                  flex: "1",
                  padding: "10px",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Unlock Sell
              </button>
              <button
                style={{
                  flex: "1",
                  padding: "10px",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Lock Sell
              </button>
            </div>
          </div>

          {/* Ownership Section */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Ownership
            </h3>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              Renounce Ownership
            </button>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Callback Ownership
            </button>
          </div>

          {/* Set Tax Section */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                marginBottom: "12px",
              }}
            >
              Set Tax
            </h3>
            <input
              type="text"
              placeholder="Enter buy tax rate"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Enter sell tax rate"
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Set Tax
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlETHPage;
