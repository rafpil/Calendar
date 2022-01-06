import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DayCardSm from "./DayCardSm/DayCardSm";
import HeaderSm from "./HeaderSm/HeaderSm";

import "./CalendarSm.scss";

const CalendarSm = () => {
  return (
    <MDBContainer fluid className="calendar-sm">
      <MDBRow>
        <HeaderSm />
      </MDBRow>
      <DayCardSm />
    </MDBContainer>
  );
};

export default CalendarSm;
