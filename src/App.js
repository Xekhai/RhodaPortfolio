import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.scss';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Loader from "react-loaders";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>      
        </Routes>
      </div>     
    </Router>

    <Loader type="pacman" />
    </>
  );
}

export default App;
