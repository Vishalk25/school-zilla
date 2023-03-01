import React from "react";
import ColorButtons from "./Button";
import SearchInput from "./SearchInput";
import SideBar from "./SideBar";
import "./Student.css";
import DataTable from "./StudentTable";
import schoolLogo from "../assets/Screenshot (7) 4.png";
import copyrightLogo from "../assets/@Copyright 2023, School Zilla Pvt. Ltd..png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Student() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="middleContainer">
          <div className="topHeader">
            <h1>Students</h1>
            <div className="profileMenu">asdasd</div>
          </div>
          <div className="middleHeader">
            <SearchInput />
            <ColorButtons />
          </div>
          <div className="studentDetail">
            <DataTable />
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={schoolLogo} alt="" />
        <img src={copyrightLogo} alt="" />
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
