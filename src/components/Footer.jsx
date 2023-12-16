import React from "react";

const Footer = () => {
  const list1 = ["twitter", "instagram", "facebook", "youtube", "whatsapp"];
  const list2 = ["Quality", "Help", "Share", "Carrers", "Work", "Testimonials"];
  const list3 = [
    "244-5333-7783",
    "hello@foodie.com",
    "press@foodie.com",
    "contact@foodie.com",
  ];
  const list4 = ["Terms & Conditions", "Privacy Policy"];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="list1">
          <div className="logo">FOODIE</div>
          <div className="social-icons">
            {list1.map((item) => (
              <i className={`fa-brands fa-${item}`} key={item} />
            ))}
          </div>
        </div>
        <div className="list2 list">
          {list2.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="list3 list">
          {list3.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="list4 list">
          {list4.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
