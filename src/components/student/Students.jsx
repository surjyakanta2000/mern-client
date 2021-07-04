import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getStudent } from "../../services/studentService";
import Loader from "../common/Loader";
import DataTable from "../common/DataTable";

const Students = ({ user }) => {
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const students = await getStudent();
      setStudents(students);
      setLoader(false);
    };
    getData();
  }, []);
  const columns = [
    { label: "Student Roll", value: "studentRoll" },
    { label: "Student Name", value: "studentName" },
    { label: "Student Department", value: "studentDept.deptCode" },
    { label: "Student Semester", value: "studentSemester" },
    { label: "Student Email", value: "studentEmail" },
    { label: "Student Phone", value: "studentPhone" },
    { label: "Edit", value: "/students/update/" },
    { label: "Delete", value: "delete" },
  ];
  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Row className="mt-2 mb-2">
            <Col sm={8}>
              <h2
                style={{
                  color: "#5effe2",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                Student List
              </h2>
            </Col>
            {user && user.role === "admin" && (
              <Col sm={4}>
                <Link className="btn btn-primary" to="/students/add">
                  Add Student
                </Link>
              </Col>
            )}
          </Row>
          <div className="model-dash">
            <DataTable tableName="student" data={students} columns={columns} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Students;
