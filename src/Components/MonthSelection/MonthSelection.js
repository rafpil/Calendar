import React, { useContext } from "react";
import DateContext from "../../Context/DateCtx";
import { MDBIcon } from "mdb-react-ui-kit";
import dayjs from "dayjs";

import "./MonthSelection.scss";

const MonthSelection = () => {
  const ctx = useContext(DateContext);

  const nextMonth = () => {
    ctx.addMonth();
  };

  const prevMonth = () => {
    ctx.subtractMonth();
  };

  return (
    <div className="monthSelect">
      <MDBIcon onClick={prevMonth} className="p-2" fas icon="angle-left"  size="2x"/>

      {dayjs(ctx.data).format("MMMM YYYY")}

      <MDBIcon onClick={nextMonth} className="p-2" fas icon="angle-right" size="2x" />
    </div>
  );
};

export default MonthSelection;
