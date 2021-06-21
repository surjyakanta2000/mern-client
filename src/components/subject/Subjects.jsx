import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container, Table, Button,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSubject, deleteSubject } from "../../services/subService";
import Loader from "../common/Loader";

const Subjects = () => {
  const [sub, setSub] = useState([]);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    const getData = async () => {
      const sub = await getSubject();
      setSub(sub);
      setLoader(false)
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteSubject(id);
    const sub = await getSubject();
    setSub(sub);
  };
  return (
    <Container>
       {loader?<Loader/>:<>
      <Row className="mt-2 mb-2">
        <Col sm={8}>
      <h2>Subjects..</h2></Col>
      <Col sm={4}> <Link className="btn btn-primary" to="/subjects/add">
        Add Subject
      </Link></Col>
      </Row>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Subject Dept</th>
            <th>Subject Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sub.map((s) => {
            return (
              <tr key={s._id}>
                <td>{s.subCode}</td>
                <td>{s.subName}</td>
                <td>{s.subDept.deptCode}</td>
                <td>{s.subSemester}</td>
                <td className="d-flex justify-content-evenly">
                  <Link
                    className="btn bg-light"
                    to={`/subjects/update/${s._id}`}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <Button
                    className="btn bg-light"
                    onClick={() => handleDelete(s._id)}
                  >
                    <FontAwesomeIcon className="text-danger" icon={faTrash} />
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

export default Subjects;
