import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Table, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteClass, getClassForDept } from "../../services/classService";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../services/userService";
const DeptAllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      setUser(user);
      const allClasses = await getClassForDept(user.deptId);
      setClasses(allClasses);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const handleDelete = async (id) => {
    await deleteClass(id);
    const allClasses = await getClassForDept(user.deptId);
    setClasses(allClasses);
  };
  return (
    <>
      <Row className="d-flex mt-3 mb-2">
        <Col
          sm={8}
          style={{
            color: "#5effe2",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
          }}
        >
          <h3>Dept All Classes</h3>
        </Col>
        <Col sm={4}>
          <Link className="btn custom-btn text-end" to="/class/new">
            Add Class
          </Link>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            <th>Class Name</th>
            <th>Subject Code</th>
            <th>Teacher Name</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => {
            return (
              <tr
                key={c._id}
                style={{
                  color: "white",
                }}
              >
                <td>{c.clsName}</td>
                <td>{c.clsSubject.subCode}</td>
                <td>{c.clsTeacher !== null ? c.clsTeacher.techName : ""}</td>
                <td>{c.clsSemester}</td>
                <td className="d-flex justify-content-evenly">
                  <Link className="btn bg-light" to={`/class/update/${c._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <Button
                    className="btn bg-light"
                    onClick={() => handleDelete(c._id)}
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DeptAllClasses;
