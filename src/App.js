import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Containers
import Home from "./containers/Home";
import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Videos from "./containers/Videos";
import Contact from "./containers/Contact";
import Admin from "./containers/Admin";
import Events from "./containers/Events";
import Past from "./containers/Past";
import Testimonials from "./containers/Testimonials";
import VideoTestimonials from "./containers/VideoTestimonials";

// Components
import Header from "./components/Header";
import WhatsApp from "./components/Utility/WhatsApp";

function App() {
  useEffect(() => {
    // Scroll Animation function usin AOS package
    Aos.init({ duration: 800 });
  }, []);
  return (
    <Router>
      <Header />
      <WhatsApp />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/videotestimonials">
          <VideoTestimonials />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/past">
          <Past />
        </Route>
        <Route path="/events">
          <Events />
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
