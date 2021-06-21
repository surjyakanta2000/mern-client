import { Tabs, Tab } from "react-bootstrap";
import MyClasses from "../class/MyClasses";
import Assignment from "../class/Assignment";
import Info from "./tabpages/Info";
const TeacherTab = ({ tech, classes }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3" fill>
      <Tab eventKey="info" title="Info">
        <Info tech={tech} />
      </Tab>
      <Tab eventKey="class" title="Class">
        <MyClasses classes={classes} />
      </Tab>
      <Tab eventKey="assignment" title="Assignment">
        <Assignment id={tech._id} />
      </Tab>
    </Tabs>
  );
};

export default TeacherTab;
