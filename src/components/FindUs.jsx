const FindUs = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>FIND US</h2>
          <div className="red-line"></div>
        </div>

        <div className="row align-items-center">
          <address className="col-md-6">
            <p>📍 New York, USA</p>
            <p>📞 +1 234 567 890</p>
          </address>

          <div className="col-md-6">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.819987379086!2d-73.9851306845943!3d40.75889617932645"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
