import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: "ABOUT US", id: "about" },
  { label: "MENU", id: "menu" },
  { label: "BLOGS", id: "blogs" },
  { label: "TESTIMONY", id: "testimony" },
  { label: "FIND US", id: "contact" },
  { label: "OUR TEAM", id: "ourteam" },
];

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#000",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 style={{ color: "#fff", fontSize: "1.5rem", margin: 0 }}>
          Pizza Restaurant
        </h1>

        <nav className="d-flex align-items-center gap-4">
          <ul className="d-flex gap-3 m-0 p-0 list-unstyled">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.id}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-3">
            <FaInstagram color="#fff" />
            <FaFacebookF color="#fff" />
            <FaWhatsapp color="#fff" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
