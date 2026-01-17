import doughImg from "../assets/image-1.jpg";

const About = () => {
  return (
    <section id="about" className="container py-5" style={{ color: "#fff", backgroundColor: "#000" }}>
      <div className="section-title">
        <h2>ABOUT US</h2>
        <div className="red-line"></div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src={doughImg}
            alt="Pizza dough"
            className="img-fluid rounded"
            style={{ height: "280px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
