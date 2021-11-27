import Navigation from "./components/Navigation";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Container overflowX="none" fontFamily="Josefin Slab">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/characters" exact element={<Characters />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
