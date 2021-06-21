import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container, Table, Button,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteStudent, getStudent } from "../../services/studentService";
import Loader from "../common/Loader";

const Students = () => {
  const [student, setStudent] = useState([]);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    const getData = async () => {
      const student = await getStudent();
      setStudent(student);
        setLoader(false)
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    const student = await getStudent();
    setStudent(student);
  };
  return (
    <Container>
      {loader?<Loader/>:<>
      <Row className="mt-2 mb-2">
        <Col sm={8}><h2>Student List</h2></Col>
        <Col sm={4}> <Link className="btn btn-primary" to="/students/add">
        Add Student
      </Link></Col>
        </Row>
   
     <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Student Roll</th>
            <th>Student Name</th>
            <th>Student Dept</th>
            <th>Student Semester</th>
            <th>Student Email</th>
            <th>Student Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((s) => {
            return (
              <tr key={s._id}>
                <td>{s.studentRoll}</td>
                <td>{s.studentName}</td>
                <td>{s.studentDept.deptCode}</td>
                <td>{s.studentSemester}</td>
                <td>{s.studentEmail}</td>
                <td>{s.studentPhone}</td>
                <td className="d-flex justify-content-evenly">
                  <Link
                    className="btn bg-light"
                    to={`/students/update/${s._id}`}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <Button
                    className="btn bg-light"
                    onClick={() => handleDelete(s._id)}
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </>}
    </Container>
  );
};

export default Students;
