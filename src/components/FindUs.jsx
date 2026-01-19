const FindUs = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>FIND US</h2>
          <div className="red-line"></div>
        </div>

        <div className="row align-items-center">
          <address className="col-md-6 text-white">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text e.
            </p>
            <p>📍 New York, USA</p>
            <p>📞 +1 234 567 890</p>
          </address>

          <div className="col-md-6">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.819987379086!2d-73.9851306845943!3d40.75889617932645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b2f3c3d9%3A0x5c2c0e7fefb2c76b!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1705667223850!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{
                border: "2px solid #333",
                borderRadius: "8px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
