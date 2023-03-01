import React from "react";
import { AiOutlineHome, AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegUser, FaChalkboardTeacher } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { School } from './school';
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div
      className="nav_main"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "17%",
      }}
    >
      <div style={{ margin: "auto" }}>
        <School schoolName={'Wizzkid'} />
        <div className="nav_header">
          <AiOutlineHome color="white"/>
          <button className="nav_btn">Dashboard</button>
        </div>
        <div className="nav_header">
          <FaChalkboardTeacher color="white" />
          <button className="nav_btn">Students</button>
        </div>
        <div className="nav_header">
          <GiTeacher color="white" />
          <button className="nav_btn">Teachers</button>
        </div>
        <div className="nav_header">
          <HiOutlineCalendar color="white" />
          <button className="nav_btn">Event</button>
        </div>
        <div className="nav_header">
          <AiOutlinePlayCircle color="white" />
          <button className="nav_btn">Courses</button>
        </div>
        <div className="nav_header">
          <FaRegUser color="white" />
          <button className="nav_btn">User</button>
        </div>
        <div className="nav_header">
          <FiActivity color="white" />
          <button className="nav_btn">Latest Activity</button>
        </div>
      </div>
    </div>
  );
};
