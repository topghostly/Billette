import React from "react";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
// import SaleCounter from "../Components/SaleCounter";
import { Route, Routes, useLocation } from "react-router-dom";
import Details from "./Details";
import NavBar from "../Components/NavBar";
import { AnimatePresence } from "framer-motion";
import Slider from "../Components/Slider";

function Page() {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="billette/" element={<LandingPage />} />
          <Route path="billette/get-ticket" element={<HomePage />} />
          <Route path="billette/get-ticket/details/:id" element={<Details />} />
          <Route path="billette/test" element={<Slider />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Page;
