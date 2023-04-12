import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/aboutus/";
import Ebook from "./pages/ebook";
import Contact from "./pages/contact";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/Ebook" element={<Ebook />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
