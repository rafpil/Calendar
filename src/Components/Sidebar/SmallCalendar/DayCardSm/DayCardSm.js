import React, { useContext } from "react";
import DateContext from "../../../../Context/DateCtx";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const DayCardSm = () => {
  const ctx = useContext(DateContext);

  return (
    <>
      {ctx.daysMatrix.map((data, i) => (
        <MDBRow key={"dsr" + i}>
          {data.map((item, j) => (
            <MDBCol
              key={"dsc" + j}
              className={`text-center card ${
                item.$M === ctx.data.$M ? "text-dark" : "text-muted"
              } ${
                item.$D === ctx.data.$D && item.$M === ctx.data.$M
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              {item.$D}
            </MDBCol>
          ))}
        </MDBRow>
      ))}
    </>
  );
};

export default DayCardSm;
