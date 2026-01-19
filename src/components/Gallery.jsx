import pizza from "../assets/image-7.jpg";
import bread1 from "../assets/image-3.jpg";
import bread2 from "../assets/image-4.jpg";
import salad from "../assets/image-6.jpg";
import drink from "../assets/image-5.jpg";
import bread from "../assets/image-2.jpg";

const Gallery = () => {
  const images = [pizza, bread1, bread2, salad, drink, bread];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <div className="red-line"></div>
        </div>

        <div className="row g-3 justify-content-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={
                index === 5
                  ? "col-md-4 offset-md-4"
                  : index >= 3
                  ? "col-md-6"
                  : "col-md-4"
              }
            >
              <img src={img} alt="gallery" className="img-fluid rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
