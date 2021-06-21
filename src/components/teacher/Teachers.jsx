import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container, Table, Button,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTeacher, getTeacher } from "../../services/techService";
import Loader from "../common/Loader";

const Teachers = () => {
  const [tech, setTech] = useState([]);
  const [loader,setLoader]=useState(true)


  useEffect(() => {
    const getData = async () => {
      const tech = await getTeacher();
      setTech(tech);
      setLoader(false)
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteTeacher(id);
    const tech = await getTeacher();
    setTech(tech);
  };
  return (
    <Container>
      {loader?<Loader/>:<>
        <Row className="mt-2 mb-2">
        <Col sm={8}>
      <h2>Teachers..</h2></Col>
      <Col sm={4}><Link className="btn btn-primary" to="/teachers/add">
        Add Teacher
      </Link></Col>
      </Row>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Teacher Dept</th>
            <th>Teacher Email</th>
            <th>Teacher Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tech.map((t) => {
            return (
              <tr key={t._id}>
                <td>{t.techName}</td>
                <td>{t.techDept.deptCode}</td>
                <td>{t.techEmail}</td>
                <td>{t.techPhone}</td>
                <td>{t.role}</td>
                <td className="d-flex justify-content-evenly">
                  <Link
                    className="btn bg-light"
                    to={`/teachers/update/${t._id}`}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <Button
                    className="btn bg-light"
                    onClick={() => handleDelete(t._id)}
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table></>}
    </Container>
  );
};

export default Teachers;
