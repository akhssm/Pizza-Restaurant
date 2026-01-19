import pizza from "../assets/image-7.jpg";
import bread1 from "../assets/image-3.jpg";
import bread2 from "../assets/image-4.jpg";
import salad from "../assets/image-6.jpg";
import drink from "../assets/image-5.jpg";
import bread from "../assets/image-2.jpg";

const Gallery = () => {
  const images = [
    { src: pizza, alt: "Cheese pizza" },
    { src: bread1, alt: "Garlic bread" },
    { src: bread2, alt: "Cheese bread" },
    { src: salad, alt: "Fresh salad" },
    { src: drink, alt: "Cold drink" },
    { src: bread, alt: "Buttery bread" },
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <div className="red-line"></div>
        </div>

        <div className="row g-3">
          {images.map((img, index) => (
            <div className="col-md-4" key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
