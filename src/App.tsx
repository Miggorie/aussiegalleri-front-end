import React, { useEffect, useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import SingleDog from "./pages/singel-dog/DogSinglePage";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact";
import Home from "./pages/home/home";
import Uppladding from "./adminpanel/admin_pages/Admin_Login";
import DogsContext from "./context/DogsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogPage from "./pages/gallery/DogPage";
import "./index";

function App() {
  const { fetchData } = useContext(DogsContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dogs" element={<DogPage />} />
          <Route path="dogs/:name" element={<SingleDog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="uppladdning" element={<Uppladding />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
