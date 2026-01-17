import pizza from "../assets/image-6.jpg";

const CarouselSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="section-title">
        <h2>Carousel</h2>
        <div className="red-line"></div>
      </div>

      <div className="carousel-inner" style={{ backgroundColor: "#111", borderRadius: "8px", padding: "5px" }}>
        <img
          src={pizza}
          alt="Pizza"
          className="w-100"
          style={{ height: "380px", objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
    </section>
  );
};

export default CarouselSection;
