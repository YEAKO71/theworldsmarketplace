import React from "react";
import logo from "./logo.png";

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <img src={logo} alt="Logo" style={{ width: "100px", marginBottom: "20px" }} />
      <h1>TheWorldsMarketplace</h1>
      <p>Welcome to your global marketplace!</p>
    </div>
  );
}
