import React from "react";

var logos = [
  { id: 1, logo: "./images/logo-google.png" },
  { id: 2, logo: "./images/logo-ibm.png" },
  { id: 3, logo: "./images/logo-microsoft.png" },
  { id: 4, logo: "./images/logo-hp.png" },

  { id: 5, logo: "./images/logo-vector-graphics.png" },
];

const IconRow = () => {
  return (
    <div className="logo-row">
      {logos.map((l) => (
        <img className="logo-icon" src={l.logo} key={l.id} alt="logo" />
      ))}
    </div>
  );
};

export default IconRow;
