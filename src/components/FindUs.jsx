import mapImage from "../assets/image-8.png";

const FindUs = () => {
  return (
    <section id="contact" className="container py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="section-title">
        <h2>FIND US</h2>
        <div className="red-line"></div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <p>Lorem ipsum is simply dummy text.</p>
          <p>📍 New York, USA</p>
          <p>📞 +1 234 567 890</p>
        </div>

        <div className="col-md-6">
          <img
            src={mapImage}
            alt="Map"
            className="img-fluid rounded"
            style={{ height: "260px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
