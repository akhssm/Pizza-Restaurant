const Footer = () => {
  return (
    <footer
      className="py-3"
      style={{
        backgroundColor: "#111",  // slightly lighter than page
        color: "#fff",            // visible text
        borderTop: "1px solid #333"
      }}
    >
      <div className="container text-center">
        © 2026 Pizza Restaurant
      </div>
    </footer>
  );
};

export default Footer;
