
/* eslint-disable */



import Layout from "./screens/Layout";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import DestinationsScreen from "./screens/DestinationsScreen";
import DestinationScreen from "./screens/DestinationScreen";
import TestPreparationScreen from "./screens/TestPreparationScreen";
import ScrollToTop from "./utils/scrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DocumentationScreen from "./screens/DocumentationScreen";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
            {/* Nested Routes */}
            <Route index element={<HomeScreen />} />
            <Route path="/services" element={<ServicesScreen/>} />
            <Route path="/about" element={<AboutUsScreen/>} />
            <Route path="/contact" element={<ContactScreen/>} />
            <Route path="/destinations" element={<DestinationsScreen/>} />
            <Route path="/destinations/:countryId" element={<DestinationScreen/>} />
            <Route path="/test" element={<TestPreparationScreen/>} />
            <Route path="/documentation" element={<DocumentationScreen/>} />
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;