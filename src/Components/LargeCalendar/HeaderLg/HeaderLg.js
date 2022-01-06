import { MDBCol, MDBCard } from "mdb-react-ui-kit";
import React from "react";

import "./HeaderLg.scss";

const Header = () => {
  const daysNames = ["mon", "thu", "wed", "thu", "fri", "sat", "sun"];

  return (
    <>
      {daysNames.map((dayName, i) => (
        <MDBCol key={"calHeader-item-" + i} className="header">
          <MDBCard className="card-header">{dayName.toUpperCase()}</MDBCard>
        </MDBCol>
      ))}
    </>
  );
};

export default Header;
