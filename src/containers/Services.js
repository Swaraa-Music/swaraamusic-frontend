// Packages
import { useHistory } from "react-router";

// Components
import Footer from "../components/Footer";

const Services = () => {
  const history = useHistory();
  return (
    <div className="services bg-pink-purple-gradient">
      <div className="services__container">
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Parties</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636978951/swaraamusic/GettyImages-1183199870-a31111f5523146a284546c21ea585eab_zc8c0p.jpg"
            alt="Party Picture"
          />
        </div>
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Weddings</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979176/swaraamusic/Indian-Traditions39-563-Damion-Edwards-Photography_ipjloh.jpg"
            alt="Wedding Picture"
          />
        </div>
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Mhendhi Ceremony</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979297/swaraamusic/Featured_sza5gc.jpg"
            alt="Mhendhi Picture"
          />
        </div>
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Mhefil</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979554/swaraamusic/79564cadd53883e206a77b8bfd97e291_bhaemc.jpg"
            alt="Mhefil Picture"
          />
        </div>
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Dinner and Dance</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979754/swaraamusic/dsc08091_krlt1q.jpg"
            alt="Dinner and Dance Picture"
          />
        </div>
        <div
          className="service"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <h1>Corporate Event</h1>
          <img
            src="https://res.cloudinary.com/itrsq/image/upload/v1636979813/swaraamusic/Corporate-Event-Ideas-tip-and-advice-organize-a-corporate-event_eqwg4l.jpg"
            alt="Corporate Event Picture"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
