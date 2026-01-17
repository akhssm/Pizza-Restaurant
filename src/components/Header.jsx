import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",          // full width
        backgroundColor: "#000", // black
        padding: "20px 50px",    // space inside header
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Site Title */}
      <h1 style={{ color: "#fff", fontSize: "1.8rem", margin: 0 }}>
        Pizza Restaurant
      </h1>

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <ul style={{ display: "flex", gap: "20px", margin: 0, padding: 0, listStyle: "none" }}>
          {["ABOUT US", "MENU", "BLOGS", "TESTIMONY", "FIND US", "OUR TEAM"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "15px", marginLeft: "20px" }}>
          <a href="#" style={{ color: "#fff" }}><FaInstagram /></a>
          <a href="#" style={{ color: "#fff" }}><FaFacebookF /></a>
          <a href="#" style={{ color: "#fff" }}><FaWhatsapp /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
