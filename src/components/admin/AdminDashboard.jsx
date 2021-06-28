import { useState, useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <h2>Admin Dashboard</h2>
      <Row>
        <Col>
          <Link className="btn btn-primary btn-lg" to="/departments">
            Departments <Badge bg="secondary">{counts.departments}</Badge>
          </Link>
        </Col>
        <Col>
          <Link className="btn btn-success btn-lg" to="/teachers">
            Teachers <Badge bg="secondary">{counts.teachers}</Badge>
          </Link>
        </Col>
        <Col>
          <Link className="btn btn-info btn-lg" to="/subjects">
            Subjects <Badge bg="secondary">{counts.subjects}</Badge>
          </Link>
        </Col>
        <Col>
          <Link className="btn btn-warning btn-lg" to="/students">
            Students <Badge bg="secondary">{counts.students}</Badge>
          </Link>
        </Col>
        <Col>
          <Link className="btn btn-warning btn-lg" to="/admin/dash/notice">
            Notice<Badge bg="secondary">{counts.notices}</Badge>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
