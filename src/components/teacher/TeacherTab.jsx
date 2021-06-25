import { Tabs, Tab } from "react-bootstrap";
import MyClasses from "../class/MyClasses";
import Info from "../common/Info";
const TeacherTab = ({ tech, classes }) => {
  return (
    <Tabs defaultActiveKey="class" className="mb-3" fill>
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
