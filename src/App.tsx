import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Portfolio from "./Routes/Portfolio";
import Contact from "./Routes/Contact";
import Navigation from "./Components/Navigation/Navigation.component";
import Cursor from "./Components/Cursor/Cursor.component";
import { ModalProvider } from "./Context/modal-context";

function App() {
  return (
    <ModalProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Cursor />
    </ModalProvider>
  );
}

export default App;
