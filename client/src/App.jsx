import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarHeader from "./components/navbar_header";
import "./styles/App.css";
import "./styles/output.css";
import HomePage from "./pages/HomePage";
import ControlETHPage from "./pages/ControlETHPage";
import ControlBNBPage from "./pages/ControlBNBPage";
import ControlSOLPage from "./pages/ControlSOLPage";
function App() {
  return (
    <Router>
      <div>
        <NavbarHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eth" element={<ControlETHPage />} />
          <Route path="/bnb" element={<ControlBNBPage />} />
          <Route path="/sol" element={<ControlSOLPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
