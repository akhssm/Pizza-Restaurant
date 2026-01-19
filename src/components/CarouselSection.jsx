import img1 from "../assets/image-1.jpg";
import img2 from "../assets/image-2.jpg";
import img3 from "../assets/image-3.jpg";
import img4 from "../assets/image-4.jpg";
import img5 from "../assets/image-5.jpg";

const CarouselSection = () => {
  return (
    <section className="py-5" aria-label="Food carousel">
      <div className="container">
        <div className="section-title">
          <h2>Carousel</h2>
          <div className="red-line"></div>
        </div>

        <div
          id="pizzaCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Pizza slide ${index + 1}`}
                  style={{ height: "380px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
