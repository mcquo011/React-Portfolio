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
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <Router basename="/React-Portfolio">
      <div className="app">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
