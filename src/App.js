import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import "./App.scss";
import LgCalendar from "./Components/LargeCalendar/CalendarLg";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <MDBContainer breakpoint="xxl">
      <MDBRow>
        <MDBCol size='2'>
          <Sidebar/>
        </MDBCol>
        <MDBCol size='10'>
          <LgCalendar/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
