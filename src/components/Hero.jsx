import heroPizza from "../assets/image-9.jpeg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundColor: "#000", // black background
        height: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      {/* Hero Text */}
      <div
        className="hero-content"
        style={{
          color: "#fff",
          maxWidth: "500px",
          marginRight: "30px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "15px" }}>
          Craving for a cheesy pizza?
        </h1>
        <div
          className="red-line"
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "#e63946",
            margin: "10px 0",
          }}
        ></div>
        <p style={{ fontSize: "1rem", lineHeight: 1.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>

      {/* Pizza Image */}
      <div className="hero-image">
        <img
          src={heroPizza}
          alt="Pizza"
          style={{
            width: "500px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            filter: "brightness(0.5)", // darkens the image
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
