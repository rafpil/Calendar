import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import "./App.scss";
import LgCalendar from "./Components/LargeCalendar/CalendarLg";
import MonthSelection from "./Components/MonthSelection/MonthSelection";
import Sidebar from "./Components/Sidebar/Sidebar";
import UserIcon from "./Components/User/UserIcon/UserIcon";

function App() {
  return (
    <MDBContainer breakpoint="xxl">
      <MDBRow>
        <MDBCol size="2">
          <Sidebar />
        </MDBCol>
        <MDBCol size="10">
          <MDBRow className="align-items-center">
            <MDBCol size="4">
              <MonthSelection />
            </MDBCol>
            <MDBCol size="6">
              
            </MDBCol>
            <MDBCol size="2" className="d-flex justify-content-end">
              <UserIcon />
            </MDBCol>
          </MDBRow>
          <MDBRow>
              <LgCalendar />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
