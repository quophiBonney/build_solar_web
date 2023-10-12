import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/AppFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SolarPlans from "./pages/solarPlans/SolarPlans";
import MonthlyLease from "./pages/monthlyLease/MonthlyLease";
import FullAmount from "./pages/fullAmount/fullAmount";
import SolarMonthly from "./pages/monthlySolar/SolarMonthly";
import PurchaseSolar from "./pages/purchaseSolar/PurchaseSolar";
import WhyOverview from "./pages/why/WhyOverview";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/solar-plans-and-services" element={<SolarPlans />} />
          <Route
            path="/solar-plans-and-services/monthly-solar-lease"
            element={<MonthlyLease />}
          />
          <Route
            path="/solar-plans-and-services/full-amount-solar-lease"
            element={<FullAmount />}
          />
          <Route
            path="/solar-plans-and-services/monthly-solar-loan"
            element={<SolarMonthly />}
          />
          <Route
            path="/solar-plans-and-services/purchase-solar-system"
            element={<PurchaseSolar />}
          />
          <Route path="/why-bridge-solar" element={<WhyOverview />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
