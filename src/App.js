import React from "react";
import "./App.css";
// import Course from "./components/Layouts/CoursePage/Course";
import AddNewStudent from "./components/Layouts/StudentPage/AddNewStudent";
// import Student from "./components/Layouts/StudentPage/Student";
import AddNewTeacher from "./components/Layouts/TeacherPage/AddNewTeacher";
// import Teacher from "./components/Layouts/TeacherPage/Teacher";

function App() {
  // return <div>{true ? <Student /> : <Teacher />}</div>;
  return (
    <div>
      <AddNewTeacher />
    </div>
  );
}

export default App;
