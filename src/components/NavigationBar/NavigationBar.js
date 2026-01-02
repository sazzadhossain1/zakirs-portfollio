import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../accets/footerPhoot/footerLogo/logo.png";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // ✅ Detect screen resize to switch between mobile / desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav>
        <div className="navigation_flex_div" ref={menuRef}>
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            className="faBars"
            icon={faBars}
            onClick={toggleMenu}
          />

          {/* Main Menu */}
          <div className="ABAACORP">
            {/* <img className="natigation_logo" src={logo} alt="" /> */}
            ZAKIR HOSSAIN
          </div>
          <ul className={`main_menu_ul ${menuOpen ? "side_menu_open" : ""}`}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#Services"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("Services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Videos
              </Link>
            </li>

            <li>
              <Link
                to="/#Contact"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("Contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Images
              </Link>
            </li>
            <li>
              <Link
                to="/#Portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("Portfolio");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
