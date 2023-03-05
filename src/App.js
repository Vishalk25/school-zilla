import React from "react";
import "./App.css";
import Student from "./components/Layouts/StudentPage/Student";
import Teacher from "./components/Layouts/TeacherPage/Teacher";

function App() {
  return <div>{false ? <Student /> : <Teacher />}</div>;
}

export default App;
