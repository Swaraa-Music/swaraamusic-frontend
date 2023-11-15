import "./App.css";
import "react-multi-carousel/lib/styles.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loadable from "react-loadable";
import { Helmet } from "react-helmet";

// Components
import WhatsApp from "./components/Utility/WhatsApp";
import isEqual from "react-fast-compare";

const Home = React.lazy(() => import("./containers/Home"));
const About = React.lazy(() => import("./containers/About"));
const Gallery = React.lazy(() => import("./containers/Gallery"));
const Videos = React.lazy(() => import("./containers/Videos"));
const Contact = React.lazy(() => import("./containers/Contact"));
const Admin = React.lazy(() => import("./containers/Admin"));
const Events = React.lazy(() => import("./containers/Events"));
const Past = React.lazy(() => import("./containers/Past"));
const Testimonials = React.lazy(() => import("./containers/Testimonials"));
const VideoTestimonials = React.lazy(() =>
  import("./containers/VideoTestimonials")
);

const AsyncComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "myNamedChunk" */ "./components/Header"),
  loading: () => <div>loading...</div>,
  modules: ["myNamedChunk"],
});

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <Suspense fallback={null}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swaraa Music</title>
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
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default React.memo(App, isEqual);
