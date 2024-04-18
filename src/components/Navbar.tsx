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
            Aussie&shy;galleri
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
        <nav aria-label="Huvudmeny">
          <div
            id="mobile-popup"
            className={menuIsOpen ? "mobile-menu-open" : "mobile-menu-hidden"}
          >
            <div className="mobile-view-container">
              <Link className="logga-hidden" to="/" onClick={closeMenu}>
                <p>Gå till startsidan</p>
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
              <li>{menuLink("/dogs", "Galleriet")}</li>
              <li>{menuLink("/about", "Om galleriet")}</li>
              <li>{menuLink("/faq", "Vanliga frågor")}</li>
              <li>{menuLink("/contact", "Kontakta oss")}</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
  function menuLink(url: string, menuTitle: string) {
    {
      return (
        <Link
          className={`menu-link ${
            location.pathname === url ? "active-link" : ""
          }`}
          to={url}
          onClick={closeMenu}
          aria-current={location.pathname === url ? "page" : undefined}
        >
          {menuTitle}
        </Link>
      );
    }
  }
}

export default Nav;
