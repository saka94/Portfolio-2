import "./css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Common/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common/Footer/Footer";
import ProjectDetails from "./Components/Projects/ProjectDetails/ProjectDetails";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
