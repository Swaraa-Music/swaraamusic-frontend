// Packages
import { useHistory } from "react-router-dom";

// Components
import Footer from "../components/Footer";

// img
import logo from "../assets/img/logo_purple_transparent.png";

const About = () => {
  const history = useHistory();
  return (
    <div className="about">
      <div className="about__container">
        <img src={logo} alt={logo} data-aos="fade" />
        <h1 className="txt-header-purple" data-aos="fade">
          Swaraa Music - Bollywood Live Music Band
        </h1>
        <h2 className="txt-description-black-bold">
          Swaraa Music are a leading Live Bollywood Asian Indian music group
          based in London. We are a collective team of professional vocalists
          and musicians specialising in all decades of Asian Indian popular
          music.
        </h2>
        <p className="txt-description-black">
          Our speciality is in all genres of songs from many of the old classic
          movies of yesteryear to current day new releases from the Bollywood
          film industry. A close relationship with all of our versatile
          musicians ensures, quality musical performances, ranging from soulful
          romantic Bollywood songs, Uplifting dance songs, Bhangra, Ghazals,
          Qawalis as well as the traditional taste of garba and bhajans – Making
          your event a truly enjoyable and special!
        </p>
        <p className="txt-description-black">
          Our live performances cover hit songs from renowned Bollywood playback
          singers such as Lata, Asha, Mukesh, Rafi, Kishore and right up to the
          current popular artists such as Sonu, Rahet Fateh Ali Khan, Shreya and
          Sunidhi.
        </p>
        <p className="txt-description-black">
          We are very proud to be unique by only working with the best and
          respected musicians in the industry who are regular performers on both
          a national and international level for live Bollywood music, with many
          having played at major venues and regular stage music nights in and
          around London, and also having played at many of the UK’s large cities
          such Manchester, Cardiff, Birmingham, Leicester Edinburgh to name a
          few.
        </p>
        <p className="txt-description-black">
          We travel and tour all over the UK and Europe with our live band, and
          have recently completed a number of events in South Africa, Zimbabwe,
          Malawi, Kenya, Sweden, Switzerland, Holland, France, Spain and
          Portugal. We can also accommodate for performances in America, Canada,
          Dubai and the Middle East.
        </p>
        <p className="txt-description-black">
          Whether you are planning a Party, Wedding, Mehndhi, Mehfil, Dinner and
          Dance or a Themed/ Corporate event, we are here to provide you with
          the perfect, memorable musical experience that only a live Bollywood
          music band can bring!
        </p>
        <button
          onClick={() => history.push("/contact")}
          className="btn-burgundy"
        >
          Get your quote
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
