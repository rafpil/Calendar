import React from "react";
import { MDBCol } from "mdb-react-ui-kit";

const HeaderSm = () => {
  const daysNames = ["m", "t", "w", "t", "f", "s", "s"];

  return (
    <>
      {daysNames.map((dayName, i) => (
        <MDBCol key={'hs' + i} className="card text-center">
          {dayName.toUpperCase()}
        </MDBCol>
      ))}
    </>
  );
};

export default HeaderSm;
