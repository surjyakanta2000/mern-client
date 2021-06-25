import { Tabs, Tab } from "react-bootstrap";
import Attendance from "./tabpages/Attendance";
import Classes from "./tabpages/Classes";
import Info from "./tabpages/Info";
const StudentTab = ({ student, classes, attendList }) => {
  return (
    <Tabs defaultActiveKey="class" className="mb-3" fill>
      <Tab eventKey="info" title="Info">
        <Info student={student} />
      </Tab>
      <Tab eventKey="class" title="Class">
        <Classes classes={classes} />
      </Tab>
      <Tab eventKey="attendance" title="Attendance">
        <Attendance attendList={attendList} />
      </Tab>
    </Tabs>
  );
};

export default StudentTab;
