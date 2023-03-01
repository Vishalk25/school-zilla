import React from "react";
import "./SideBar.css";
import schoolLogo from "../assets/schoolLogo1.png";
import homeIcon from "../assets/pngfind.com-home-icon-png-1819775.png";
import studentIcon from "../assets/student_education_man_bachelor_boy_-512.webp";
import teacherIcon from "../assets/1980233-200.png";
import eventIcon from "../assets/pngegg.png";
import courseIcon from "../assets/12.webp";
import userIcon from "../assets/user-128-128.png";
import activityIcon from "../assets/activity_icon_151646.png";

export default function SideBar() {
  return (
    <div className="container">
      <div className="schoolName">
        <img src={schoolLogo} alt="asd" />
        <p>SchoolName1</p>
      </div>
      <div className="menuItems">
        <div className="dashBoardButton">
          <img src={homeIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={studentIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={teacherIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={eventIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={courseIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={userIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
        <div className="dashBoardButton">
          <img src={activityIcon} alt="asd" />
          <p>SchoolName1</p>
        </div>
      </div>
    </div>
  );
}
