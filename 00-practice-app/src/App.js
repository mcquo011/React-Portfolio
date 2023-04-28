import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Outlet,
  Routes,
} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;