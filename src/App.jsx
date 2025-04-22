import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
