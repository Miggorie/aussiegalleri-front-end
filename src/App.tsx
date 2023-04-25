import React, { useEffect, useContext } from "react";
import Footer from "./components/footercomponent/Footer";
import Header from "./components/headercomponent/Navbar";
import SingleDog from "./pages/dog";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact";
import Home from "./pages/home/home";
import DogsContext from "./context/DogsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogPage from "./pages/doglist/DogPage";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
