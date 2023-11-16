import "./App.css";
import "react-multi-carousel/lib/styles.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loadable from "react-loadable";
import { Helmet } from "react-helmet";

// Components
import WhatsApp from "./components/Utility/WhatsApp";
import isEqual from "react-fast-compare";
import axios from "axios";
import { API } from "./config";
import Loader from "./components/Utility/Loader";

const Contact = React.lazy(() => import("./containers/Contact"));

const AsyncComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./components/Header"),
  loading: () => <div>loading...</div>,
  modules: ["myNamedChunk"],
});

const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Home"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const About = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/About"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Gallery = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Gallery"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Videos = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Videos"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Past = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Past"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const VideoTestimonials = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "myNamedChunk" */ "./containers/VideoTestimonials"
    ),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Events = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Events"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Admin = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Admin"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

const Testimonials = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./containers/Testimonials"),
  loading: () => <Loader />,
  modules: ["myNamedChunk"],
});

function App() {
  // States
  const [testimonials, setTestimonials] = useState([]);
  const [heroSliders, setHeroSliders] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderResponse, testimonialsResponse, homeResponse] =
          await Promise.all([
            axios.get(`${API}/pictures/hero`),
            axios.get(`${API}/testimonials`),
            axios.get(`${API}/home`),
          ]);

        setHeroSliders(sliderResponse?.data);
        setTestimonials(testimonialsResponse?.data);
        setHome(homeResponse?.data);
      } catch (error) {
        console.log(error, "data error");
      }
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={null}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swaraa Music - home</title>
        <link rel="canonical" href="https://www.swaraamusic.com/" />
      </Helmet>
      <Router>
        <AsyncComponent />
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
            <Home
              testimonials={testimonials}
              heroSliders={heroSliders}
              home={home}
            />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default React.memo(App, isEqual);
