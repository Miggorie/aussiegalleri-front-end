import { useState } from "react";
import { Transition } from "@headlessui/react";
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
          <button
            className="mobile-menu"
            aria-expanded={menuIsOpen}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
              setShowCloseButton(!showCloseButton);
            }}
          >
            Meny
          </button>
        </div>
        <nav>
          <div
            className={menuIsOpen ? "mobile-menu-open" : "mobile-menu-hidden"}
          >
            <ul className="nav-ul">
              <li>
                <Link to="/dogs" onClick={closeMenu}>
                  Galleriet
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  Om galleriet
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={closeMenu}>
                  Vanliga frågor
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Kontakta oss
                </Link>
              </li>
            </ul>
            {showCloseButton && (
              <button className="close-menu" onClick={closeMenu}>
                Stäng
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
