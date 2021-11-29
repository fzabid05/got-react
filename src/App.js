import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.css";
function App() {
  return (
    <Container overflowX="none" bg="#454040" fontFamily="Josefin Slab">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/characters" exact element={<Characters />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
