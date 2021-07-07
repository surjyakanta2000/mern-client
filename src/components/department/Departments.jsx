import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDept } from "../../services/deptService";
import Loader from "../common/Loader";
import DataTable from "../common/DataTable";

const Departments = ({ user }) => {
  const [dept, setDept] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const dept = await getDept();
      setDept(dept);
      setLoader(false);
    };
    getData();
  }, []);
  const columns = [
    { label: "Department Code", value: "deptCode" },
    { label: "Department Name", value: "deptName" },
    { label: "Edit", value: "/departments/update/" },
  ];

  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Row className="mt-2 mb-2">
            <Col sm={8}>
              <h2>Departments..</h2>
            </Col>
            {user && user.role === "admin" && (
              <>
                <Col sm={4}>
                  <Link className="btn btn-primary" to="/departments/add">
                    Add Department
                  </Link>
                </Col>
              </>
            )}
          </Row>
          <div className="model-dash">
            <DataTable tableName="department" data={dept} columns={columns} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Departments;
