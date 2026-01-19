import heroPizza from "../assets/image-9.jpeg";

const Hero = () => {
  return (
    <main role="main">
      <section
        className="hero"
        role="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroPizza})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="hero-content">
          <h1>Craving for a cheesy pizza?</h1>
          <div className="red-line"></div>
          <p>
            Freshly baked pizzas with the finest ingredients, served hot and
            delicious every day.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
