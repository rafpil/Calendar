import React, { useContext } from "react";
import DateContext from "../../../Context/DateCtx";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdb-react-ui-kit";

import './DayCard.scss';

const DayCard = (props) => {
  const ctx = useContext(DateContext);
  const day = props.dayItem.$D;
  const month = props.dayItem.$M;
  
  return (
    <MDBCard className="day-card">
      <MDBCardHeader className={`card-header ${month === ctx.data.$M ? "text-dark font-weight-bold" : "text-muted"}`}>
        {day}
      </MDBCardHeader>
      <MDBCardBody className="card-body">{props.children}</MDBCardBody>
    </MDBCard>
  );
};

export default DayCard;
