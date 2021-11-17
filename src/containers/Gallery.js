const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe
          src="https://snapwidget.com/embed/972068"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            padding: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Gallery;
