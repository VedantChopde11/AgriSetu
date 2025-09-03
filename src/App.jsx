import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router";
import {Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Components/Navigation";
import { Footer } from "./Components/Components/Footer";

// Corrected imports (from components folder, not pages)
import { HomePage } from "./Components/Components/Homepage";
import { FarmerLogin } from "./Components/Components/FarmerLogin";
import { WholesalerLogin } from "./Components/Components/WholesalerLogin";
import { FarmerDashboard } from "./Components/Components/FarmerDashboard";
import { WholesalerDashboard } from "./Components/Components/WholesalerDashboard";
import { HowItWorks } from "./Components/Components/Howitworks";
import { About } from "./Components/Components/About";
import { Contact } from "./Components/Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerLogin />} />
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/wholesaler/login" element={<WholesalerLogin />} />
          <Route path="/wholesaler/signup" element={<WholesalerLogin />} />
          <Route path="/wholesaler/dashboard" element={<WholesalerDashboard />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
