import bread1 from "../assets/image-3.jpg";
import bread2 from "../assets/image-4.jpg";
import salad from "../assets/image-6.jpg";
import drink from "../assets/image-5.jpg";
import pizza from "../assets/image-7.jpg";
import bread from "../assets/image-2.jpg";

const menuItems = [
  { img: bread1, title: "Stuffed Garlic Bread", desc: "Crispy bread stuffed with cheese" },
  { img: bread2, title: "Cheese Pocket", desc: "Baked bread with melted cheese" },
  { img: salad, title: "Fresh Salad", desc: "Healthy veggies & dressing" },
  { img: drink, title: "Cold Shake", desc: "Refreshing chilled beverage" },
  { img: pizza, title: "Delicious Pizza", desc: "Cheesy pizza with toppings" },
  { img: bread, title: "Buttery Bread", desc: "Soft bread with butter" }
];

const Menu = () => {
  return (
    <section id="menu" className="container py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="section-title">
        <h2>MENU</h2>
        <div className="red-line"></div>
      </div>

      <div className="row g-4">
        {menuItems.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="d-flex gap-3" style={{ backgroundColor: "#111", padding: "10px", borderRadius: "8px" }}>
              <img
                src={item.img}
                alt={item.title}
                width="90"
                height="70"
                style={{ objectFit: "cover", borderRadius: "6px" }}
              />
              <div>
                <h6 className="text-warning mb-1">{item.title}</h6>
                <p className="mb-0 small">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
