import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header
      role="banner"
      style={{
        backgroundColor: "#000",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 style={{ color: "#fff", fontSize: "1.5rem", margin: 0 }}>
          Pizza Restaurant
        </h1>

        <nav aria-label="Primary Navigation" role="navigation">
          <ul
            className="d-flex gap-3 m-0 p-0 list-unstyled align-items-center"
            role="menubar"
          >
            {[
              { label: "ABOUT US", id: "about" },
              { label: "MENU", id: "menu" },
              { label: "GALLERY", id: "gallery" },
              { label: "FIND US", id: "contact" },
            ].map((item, idx) => (
              <li key={idx} role="none">
                <a
                  href={`#${item.id}`}
                  role="menuitem"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="d-flex gap-3" aria-label="Social media links">
          <FaInstagram color="#fff" />
          <FaFacebookF color="#fff" />
          <FaWhatsapp color="#fff" />
        </div>
      </div>
    </header>
  );
};

export default Header;
