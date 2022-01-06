import React, { useContext } from "react";
import DateContext from "../../Context/DateCtx";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Header from "./HeaderLg/HeaderLg";
import DayCard from "./DayCardLg/DayCardLg";

import "./CalendarLg.scss";

const CalendarLg = () => {
  const ctx = useContext(DateContext);

  return (
    <MDBContainer fluid className="calendar">
      <MDBRow className="row">
        <Header></Header>
      </MDBRow>
      {ctx.daysMatrix.map((data, i) => (
        <MDBRow className="row" key={"row-days-" + i}>
          {data.map((item, j) => (
            <MDBCol className="col" key={"day-item-" + j}>
              <DayCard dayItem={item}> Test event text </DayCard>
            </MDBCol>
          ))}
        </MDBRow>
      ))}
    </MDBContainer>
  );
};

export default CalendarLg;
