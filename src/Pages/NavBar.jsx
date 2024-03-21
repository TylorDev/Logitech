import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="navbar-logo  ">
        {/* Aquí puedes colocar tu logo */}
        <img src="Logo.svg" alt="Logo" />
      </div>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Specifications
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
