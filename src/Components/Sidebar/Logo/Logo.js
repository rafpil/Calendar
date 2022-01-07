import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

import "./Logo.scss";

const Logo = () => {
  let firstWord = "my".toUpperCase().split("");
  let secondWord = "calendar".toUpperCase().split("");

  return (
    <div className="logo">
      <div className="logo-content hover-shadow">
        {firstWord.map((char, i) => (
          <span key={`fw${i}`} className={`upChar${i + 1}`}>{char}</span>
        ))}

        <MDBIcon fas icon="calendar-alt" size="2x" />
        
        {secondWord.map((char, i) => (
          <span key={`sw${i}`} className={`downChar${i + 1}`}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default Logo;
