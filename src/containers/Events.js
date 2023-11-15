// Packages
import { useHistory } from "react-router";

// Components
import Footer from "../components/Footer";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/events.json";
import React from "react";
import isEqual from "react-fast-compare";

const Events = () => {
  const history = useHistory();
  return (
    <div className="events bg-pink-purple-gradient">
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
      <div className="events__container">
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Parties</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636978951/swaraamusic/events/GettyImages-1183199870-a31111f5523146a284546c21ea585eab_zc8c0p.jpg"
            alt="Party "
            loading="lazy"
          />
        </div>
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Weddings & Receptions</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979176/swaraamusic/events/Indian-Traditions39-563-Damion-Edwards-Photography_ipjloh.jpg"
            alt="Wedding "
            loading="lazy"
          />
        </div>
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Sanjee & Mehndhi Events</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979297/swaraamusic/events/Featured_sza5gc.jpg"
            alt="Mhendhi "
            loading="lazy"
          />
        </div>
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Musical Festivals</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979554/swaraamusic/events/79564cadd53883e206a77b8bfd97e291_bhaemc.jpg"
            alt="Mhefil "
            loading="lazy"
          />
        </div>
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Dinner and Dance</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979754/swaraamusic/events/dsc08091_krlt1q.jpg"
            alt="Dinner and Dance "
            loading="lazy"
          />
        </div>
        <div
          className="event"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Corporate & Charity Events</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979813/swaraamusic/events/Corporate-Event-Ideas-tip-and-advice-organize-a-corporate-event_eqwg4l.jpg"
            alt="Corporate Event "
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// export default Events;
export default React.memo(Events, isEqual);
