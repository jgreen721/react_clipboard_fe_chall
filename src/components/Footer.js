import React from "react";

const links = [
  { id: 1, link: "FAQs" },
  { id: 2, link: "Privacy Policy" },
  { id: 3, link: "Install Guide" },
  { id: 4, link: "Contact Us" },
  { id: 5, link: "Press Kit" },
];
const icons = [
  { id: 1, link: "./images/icon-facebook.svg" },
  { id: 2, link: "./images/icon-instagram.svg" },
  { id: 3, link: "./images/icon-twitter.svg" },
];

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src="./images/logo.svg" alt="logo" />
      <div className="footer-links">
        {links.map((l) => (
          <li key={l.id} className="link-item">
            {l.link}
          </li>
        ))}
      </div>
      <div className="footer-icons">
        {icons.map((l) => (
          <img key={l.id} className="icon-item" src={l.link} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
