import { Tabs, Tab } from "react-bootstrap";
import Info from "../common/Info";
import AllAttendance from "./AllAttendance";
import MyClasses from "../class/MyClasses";

import DeptAllClasses from "../class/DeptAllClasses";
const TeacherTab = ({ tech, classes, attendanceList }) => {
  return (
    <Tabs defaultActiveKey="class" className="mb-3" fill variant="pills">
      <Tab eventKey="info" title="Info">
        <Info tech={tech} />
      </Tab>
      <Tab eventKey="class" title="Class">
        <DeptAllClasses />
      </Tab>
      <Tab eventKey="myclass" title="My Classes">
        <MyClasses classes={classes} />
      </Tab>
      <Tab eventKey="attendancereport" title="Attendance Report">
        <AllAttendance attendanceList={attendanceList} />
      </Tab>
    </Tabs>
  );
};

export default TeacherTab;
