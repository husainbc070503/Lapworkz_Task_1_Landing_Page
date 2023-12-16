import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const links = ["Home", "About", "Contact", "Testimonials"];
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 10) setShowNavbar(true);
    else setShowNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="container" data-aos="fade-down" data-aos-duration="1000">
      <nav className={`navbar ${showNavbar && 'fixed'}`}>
        <div className="logo">
          <img src={Logo} alt="foodie-logo" />
        </div>
        <i
          className={`fa-solid fa-${show ? "xmark" : "bars"}`}
          onClick={() => setShow(!show)}
        ></i>
        <ul className={`lists ${show && "visible"}`} id="lists">
          {links.map((item) => (
            <li className="list-item" key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
          <i className="fa-solid fa-cart-shopping"></i>
          <button type="button" className="navbar-button">
            Book Now
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
