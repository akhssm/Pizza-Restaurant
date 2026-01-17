import pizza from "../assets/image-7.jpg";
import bread1 from "../assets/image-3.jpg";
import bread2 from "../assets/image-4.jpg";
import salad from "../assets/image-6.jpg";
import drink from "../assets/image-5.jpg";
import bread from "../assets/image-2.jpg";

const Gallery = () => {
  const images = [pizza, bread1, bread2, salad, drink, bread];

  return (
    <section id="gallery" className="container py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="section-title">
        <h2>Gallery</h2>
        <div className="red-line"></div>
      </div>

      <div className="row g-3">
        {images.map((img, index) => (
          <div className="col-md-4" key={index} style={{ backgroundColor: "#111", padding: "5px", borderRadius: "8px" }}>
            <img
              src={img}
              alt="Gallery food"
              className="img-fluid"
              style={{ height: "220px", width: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
