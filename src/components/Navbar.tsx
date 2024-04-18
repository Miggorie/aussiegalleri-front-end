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
    <div className="navbar-container bg-headerbg flex items-end w-full ">
      <div className="navbar-flexbox text-white flex items-end p-6 max-[w-103] m-auto w-full ">
        <div className="mobile-view-container w-full p-0.2">
          <Link className="home-text" to="/" onClick={closeMenu}>
            Aussie&shy;galleri
          </Link>
          <div className="menu-icon-container hidden md:block">
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
              Meny1
            </button>
          </div>
        </div>
        <nav aria-label="Huvudmeny">
          <div
            id="mobile-popup"
            className={menuIsOpen ? "mobile-menu-open" : "mobile-menu-hidden"}
          >
            <div className="mobile-view-container">
              <Link className="logga-hidden hidden" to="/" onClick={closeMenu}>
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
                Meny2
              </button>
            </div>
            {/* min width needs to be configed before can use properly with min-width: 7rem */}
            <ul className="nav-ul flex flex-row [&>li]:ml-12 [&>li]:min-w-0">
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
