import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import {
  faChalkboardTeacher,
  faUserGraduate,
  faBookOpen,
  faUniversity,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import DashIcon from "../common/DashIcon";
import { getDept } from "../../services/deptService";
import { getTeacher } from "../../services/techService";
import { getSubject } from "../../services/subService";
import { getStudent } from "../../services/studentService";
import { getNotices } from "../../services/adminService";

const AdminDashboard = () => {
  const [counts, setCounts] = useState({
    departments: 0,
    teachers: 0,
    subjects: 0,
    students: 0,
  });
  useEffect(() => {
    const getData = async () => {
      let data = {
        departments: 0,
        teachers: 0,
        subjects: 0,
        students: 0,
        notices: 0,
      };
      let info = await getDept();
      data.departments = info.length;
      info = await getTeacher();
      data.teachers = info.length;
      info = await getSubject();
      data.subjects = info.length;
      info = await getStudent();
      data.students = info.length;
      info = await getNotices();
      data.notices = info.length;
      setCounts(data);
    };
    getData();
  }, []);
  return (
    <Container>
      <div className="model-dash mt-4">
        <h2
          className="d-flex justify-content-center mt-3"
          style={{
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Admin Dashboard
        </h2>
        <hr
          style={{
            color: "#0c0c0c",
            height: "3px",
          }}
        ></hr>
        <Row className="mb-4 mt-3 d-flex justify-content-center">
          <DashIcon
            label="Departments"
            count={counts.departments}
            path="/departments"
            icon={faUniversity}
            bgColor="primary"
          />

          <DashIcon
            label="Teachers"
            count={counts.teachers}
            path="/teachers"
            icon={faChalkboardTeacher}
            bgColor="success"
          />
          <DashIcon
            label="Subjects"
            count={counts.subjects}
            path="/subjects"
            icon={faBookOpen}
            bgColor="info"
          />
          <DashIcon
            label="Students"
            count={counts.students}
            path="/students"
            icon={faUserGraduate}
            bgColor="warning"
          />
          <DashIcon
            label="Notices"
            count={counts.notices}
            path="/admin/dash/notice"
            icon={faExclamationCircle}
            bgColor="dark"
          />
        </Row>
      </div>
    </Container>
  );
};

export default AdminDashboard;
