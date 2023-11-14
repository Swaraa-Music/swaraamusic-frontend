// img
import logo from "../../assets/img/logo_white_transparent.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt={logo} loading="lazy" />
    </div>
  );
};

export default Loader;
