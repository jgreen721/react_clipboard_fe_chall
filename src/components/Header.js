import React from "react";
import ButtonRow from "./ButtonRow";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ translateX: "-200vw" }}
      animate={{
        translateX: "0vw",
        transition: { duration: 1, ease: "easeIn" },
      }}
      className="header"
    >
      <div className="header-overlay">
        <img
          className="header-overlay-img"
          src="/images/bg-header-desktop.png"
          alt="overlay"
        />
      </div>
      <div className="header-content">
        <img className="header-logo" src="/images/logo.svg" alt="logo-img" />
        <h1 className="header-h1">A history of everything you copy</h1>
        <p className="header-p">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <ButtonRow />
      </div>
    </motion.div>
  );
};

export default Header;
