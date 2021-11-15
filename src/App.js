import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Containers
import Home from "./containers/Home";
import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Videos from "./containers/Videos";
import Contact from "./containers/Contact";
import Admin from "./containers/Admin";
import Services from "./containers/Services";

// Components
import Header from "./components/Header";

function App() {
  useEffect(() => {
    // Scroll Animation function usin AOS package
    Aos.init({ duration: 800 });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
