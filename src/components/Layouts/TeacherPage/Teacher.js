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
import activityIcon from "../../../assets/Activity-icon.svg";

import SideBar from "../../Common/SideBar/SideBar";
import TeacherCard from "../../Common/TeacherAvatar/TeacherCard";
import "./Teacher.css";
import BottomNavigationBar from "../../Common/BottomNavigationBar/BottomBar";
import Footer from "../../Common/Footer/Footer";

export default function Teacher() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="middleContainer">
          <div className="topHeader">
            <h1>Teachers</h1>
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
              <AddIcon /> New Teacher
            </ColorButtons>
          </div>
          <div className="teacherList">
            <div className="teacherListRow1">
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
            </div>
            <div className="teacherListRow2">
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
            </div>
            <BottomNavigationBar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
