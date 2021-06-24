import { Tabs, Tab } from "react-bootstrap";
import Info from "./tabpages/Info";
import MyClasses from "../class/MyClasses";

import DeptAllClasses from "../class/DeptAllClasses";
const TeacherTab = ({ tech, classes }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3" fill>
      <Tab eventKey="info" title="Info">
        <Info tech={tech} />
      </Tab>
      <Tab eventKey="class" title="Class">
        <DeptAllClasses />
      </Tab>
      <Tab eventKey="myclass" title="My Classes">
        <MyClasses classes={classes} />
      </Tab>
    </Tabs>
  );
};

export default TeacherTab;
