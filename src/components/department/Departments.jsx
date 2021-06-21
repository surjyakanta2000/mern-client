import React, { useState, useEffect } from "react";
import { Container, Table,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDept } from "../../services/deptService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Loader from "../common/Loader";

const Departments = () => {
  const [dept, setDept] = useState([]);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    const getData = async () => {
      const dept = await getDept();
      setDept(dept);
      setLoader(false)
    };
    getData();
  }, []);

  return (
    <Container>
       {loader?<Loader/>:<>
        <Row className="mt-2 mb-2">
        <Col sm={8}>
      <h2>Departments..</h2></Col>
      <Col sm={4}> <Link className="btn btn-primary" to="/departments/add">
        Add Dept.
      </Link></Col></Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Department Code</th>
            <th>Department Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dept.map((d) => {
            return (
              <tr key={d._id}>
                <td>{d.deptCode}</td>
                <td>{d.deptName}</td>
                <td className="d-flex justify-content-center">
                  <Link to={`/departments/update/${d._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table></>}
    </Container>
  );
};

export default Departments;
