import { Tabs, Tab } from "react-bootstrap";
import MyClasses from "../class/MyClasses";
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
    </Tabs>
  );
};

export default TeacherTab;
