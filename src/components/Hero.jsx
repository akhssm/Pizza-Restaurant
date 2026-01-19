import heroPizza from "../assets/image-9.jpeg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroPizza})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="hero-content">
        <h1>Craving for a cheesy pizza?</h1>
        <div className="red-line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </section>
  );
};

export default Hero;
