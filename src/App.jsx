import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/AppFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SolarPlans from "../src/pages/solarPlans/SolarPlans";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/solar-plans-and-services" element={<SolarPlans />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
