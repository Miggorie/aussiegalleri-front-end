import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(false);
    setShowCloseButton(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-flexbox">
        <div className="mobile-view-container">
          <Link className="home-text" to="/" onClick={closeMenu}>
            Aussiegalleri
          </Link>
          <div className="menu-icon-container">
            <button
              className="mobile-menu"
              aria-expanded={menuIsOpen}
              aria-controls="mobile-popup"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
                setShowCloseButton(!showCloseButton);
              }}
            >
              <span
                className={
                  menuIsOpen
                    ? "hamburger-container change"
                    : "hamburger-container"
                }
              >
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </span>
              Meny
            </button>
          </div>
        </div>
        <nav>
          <div
            id="mobile-popup"
            className={menuIsOpen ? "mobile-menu-open" : "mobile-menu-hidden"}
          >
            <div className="mobile-view-container">
              <div className="menu-icon-container">
                <button
                  className="mobile-menu close-menu"
                  aria-expanded={menuIsOpen}
                  aria-controls="mobile-popup"
                  onClick={() => {
                    setMenuIsOpen(!menuIsOpen);
                    setShowCloseButton(!showCloseButton);
                  }}
                >
                  <span
                    className={
                      menuIsOpen
                        ? "hamburger-container change"
                        : "hamburger-container"
                    }
                  >
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                  </span>
                  Meny
                </button>
              </div>
            </div>
            <ul className="nav-ul">
              <li>
                <Link className="menu-link" to="/dogs" onClick={closeMenu}>
                  Galleriet
                </Link>
              </li>
              <li>
                <Link className="menu-link" to="/about" onClick={closeMenu}>
                  Om galleriet
                </Link>
              </li>
              <li>
                <Link className="menu-link" to="/faq" onClick={closeMenu}>
                  Vanliga frågor
                </Link>
              </li>
              <li>
                <Link className="menu-link" to="/contact" onClick={closeMenu}>
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
