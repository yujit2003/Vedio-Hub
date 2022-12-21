import { Button } from "@chakra-ui/react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ColorModeSwitcher from "./ColorModeSwitcher";
import Header from "./components/Header";
import Home from "./components/Home";
import Vedios from "./components/vedios";
import Footer from "./components/Footer";
import Upload from "./components/upload";
import Login from "./components/login";

function App() {
  return (
    <>
    <ColorModeSwitcher />
    <Header />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vedios" element={<Vedios />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
