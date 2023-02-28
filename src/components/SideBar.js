import React from "react";
import "./SideBar.css";
import schoolLogo from "../assets/schoolLogo1.png";

export default function SideBar() {
  return (
    <div className="container">
      <div className="schoolName">
        <img src={schoolLogo} alt="asd" />
        <p>SchoolName1</p>
      </div>
      <div className="menuItems"></div>
    </div>
  );
}
