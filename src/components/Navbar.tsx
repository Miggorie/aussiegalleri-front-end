import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logga from "../images/aussie-logo-w.png";

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const location = useLocation();

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
              <Link to="/" onClick={closeMenu}>
                <span className="visually-hidden">Gå till startsidan</span>
                <img src={logga} alt="Aussiegalleriets logga" />
              </Link>
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
            <ul className="nav-ul">
              <li>
                <Link
                  className={`menu-link ${
                    location.pathname === "/dogs" ? "active-link" : ""
                  }`}
                  to="/dogs"
                  onClick={closeMenu}
                  aria-current={
                    location.pathname === "/dogs" ? "page" : undefined
                  }
                >
                  Galleriet
                </Link>
              </li>
              <li>
                <Link
                  className={`menu-link ${
                    location.pathname === "/about" ? "active-link" : ""
                  }`}
                  to="/about"
                  onClick={closeMenu}
                  aria-current={
                    location.pathname === "/about" ? "page" : undefined
                  }
                >
                  Om galleriet
                </Link>
              </li>
              <li>
                <Link
                  className={`menu-link ${
                    location.pathname === "/faq" ? "active-link" : ""
                  }`}
                  to="/faq"
                  onClick={closeMenu}
                  aria-current={
                    location.pathname === "/faq" ? "page" : undefined
                  }
                >
                  Vanliga frågor
                </Link>
              </li>
              <li>
                <Link
                  className={`menu-link ${
                    location.pathname === "/contact" ? "active-link" : ""
                  }`}
                  to="/contact"
                  onClick={closeMenu}
                  aria-current={
                    location.pathname === "/contact" ? "page" : undefined
                  }
                >
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
