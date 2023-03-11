import React from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddIcon from "@mui/icons-material/Add";
import ColorButtons from "../../Button";
import SearchInput from "../../SearchInput";
import SideBar from "../../Common/SideBar/SideBar";
import DataTable from "../../StudentTable";
import Footer from "../../Common/Footer/Footer";
import "./Student.css";

export default function Student() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <div className="topHeader">
              <p>Students</p>
              <div className="profileMenu">
                <IconButton color="primary" aria-label="add an alarm">
                  <NotificationsNoneOutlinedIcon
                    color="disabled"
                    style={{ fontSize: "2.5rem" }}
                  />
                </IconButton>
                <div className="profileName">
                  <p>
                    Saurabh k.
                    <br />
                    Admin
                  </p>
                </div>
                <div className="profileAvatar">
                  <PermIdentityOutlinedIcon
                    color="disabled"
                    style={{ fontSize: "2.5rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="middleHeader">
              <SearchInput />
              <ColorButtons parentClassName="addStudent">
                <AddIcon style={{ fontSize: "2.5rem" }} /> New Student
              </ColorButtons>
            </div>
            <div className="studentDetail">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
