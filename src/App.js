import "./app.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/services";


function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
      <div className="app">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="sections">
          <Home />
          <About />
          <Portfolio />
          <Testimonials />
          <Services />
          <Contact />
        </div>
      </div>
  );
}

export default App;
