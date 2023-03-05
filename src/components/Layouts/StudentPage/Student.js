import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddIcon from "@mui/icons-material/Add";
import ColorButtons from "../../Button";
import SearchInput from "../../SearchInput";
import SideBar from "../../Common/SideBar/SideBar";
import "./Student.css";
import DataTable from "../../StudentTable";
import schoolLogo from "../../../assets/Screenshot (7) 4.png";
// import copyrightLogo from "../../assets/Copyright-2023_-School-Zilla-Pvt.-Ltd..svg";
import { ReactComponent as copyRightLogo } from "../../../assets/Copyright-2023_-School-Zilla-Pvt.-Ltd..svg";

export default function Student() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="middleContainer">
          <div className="topHeader">
            <h2>Students</h2>
            <div className="profileMenu">
              <IconButton color="primary" aria-label="add an alarm">
                <NotificationsNoneOutlinedIcon color="disabled" />
              </IconButton>
              <div className="profileName">
                <p>
                  Saurabh k.
                  <br />
                  Admin
                </p>
              </div>
              <div className="profileAvatar">
                <PermIdentityOutlinedIcon color="disabled" />
              </div>
            </div>
          </div>
          <div className="middleHeader">
            <SearchInput />
            <ColorButtons parentClassName="addStudent">
              <AddIcon /> New Student
            </ColorButtons>
          </div>
          <div className="studentDetail">
            <DataTable />
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={schoolLogo} alt="" />
        <img src={copyRightLogo} alt="" />
        <div className="promoContainer">
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </>
  );
}
