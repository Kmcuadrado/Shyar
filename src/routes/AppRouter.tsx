import { Route, Routes } from "react-router-dom";

import { AboutPage } from "../pages/AboutPage";
import { ServicePage } from "../pages/ServicePage";
import { ContactPage } from "../pages/ContactPage";
import { ShyarTvPage } from "../pages/ShyarTvPage";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shyartv" element={<ShyarTvPage />} />
      
    </Routes>
  );
};
