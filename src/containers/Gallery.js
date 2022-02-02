// Components
import Footer from "../components/Footer";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/gallery.json";

const Gallery = () => {
  return (
    <div className="gallery">
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
      <div className="gallery__container">
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe
          title="instagram"
          src="https://snapwidget.com/embed/972068"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="yes"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            padding: "10px",
          }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
