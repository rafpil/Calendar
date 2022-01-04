import React, { useState } from "react";
import dayjs from "dayjs";

const DateContext = React.createContext({
  data: "",
  daysMatrix: [],
  addMonth: () => {},
  subtractMonth: () => {},
});

export const DateContextProvider = (props) => {
  const [data, setData] = useState(dayjs(new Date()));
  const year = dayjs(data).year();
  const month = dayjs(data).month();
  const addMonth = () => {
      setData(dayjs(data).add(1, "M"));
  }
  const subtractMonth = () => {
      setData(dayjs(data).subtract(1, "M"));
  }
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day() - 1;
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return (
    <DateContext.Provider
      value={{
        data: data,
        daysMatrix: daysMatrix,
        addMonth: addMonth,
        subtractMonth: subtractMonth,
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
