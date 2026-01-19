import pizza from "../assets/image-6.jpg";

const CarouselSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Carousel</h2>
          <div className="red-line"></div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <img
          src={pizza}
          alt="Pizza Carousel"
          style={{
            width: "100%",
            height: "380px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
};

export default CarouselSection;
