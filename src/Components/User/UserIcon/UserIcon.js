import React from "react";
import {
  MDBPopover,
  MDBPopoverBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
} from "mdb-react-ui-kit";

import logo from "./pic/user_pic.jpg";

import "./UserIcon.scss";

const UserIcon = () => {
  return (
      <MDBPopover btnClassName="userIcon" className="userIcon" btnChildren={<img src={logo} alt="user logo" />} dismiss>
        <MDBPopoverBody>
          <MDBListGroup>
            <MDBListGroupItem tag="a" href="#" action>
              <MDBIcon fas icon="user-cog" /> Profile
            </MDBListGroupItem>
            <MDBListGroupItem tag="a" href="#" action>
              <MDBIcon fas icon="sign-out-alt" /> Sign out
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBPopoverBody>
      </MDBPopover>
  );
};

export default UserIcon;
