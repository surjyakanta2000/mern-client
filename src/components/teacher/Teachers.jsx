import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTeacher } from "../../services/techService";
import Loader from "../common/Loader";
import DataTable from "../common/DataTable";

const Teachers = ({ user }) => {
  const [tech, setTech] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const tech = await getTeacher();
      setTech(tech);
      setLoader(false);
    };
    getData();
  }, []);
  const columns = [
    { label: "Teacher Name", value: "techName" },
    { label: "Teacher Department", value: "techDept.deptCode" },
    { label: "Teacher Email", value: "techEmail" },
    { label: "Teacher Phone", value: "techPhone" },
    { label: "Role", value: "role" },
    { label: "Edit", value: "/teachers/update/" },
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
                  color: "white",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                Teachers..
              </h2>
            </Col>
            {user && user.role === "admin" && (
              <Col sm={4}>
                <Link className="btn btn-primary" to="/teachers/add">
                  Add Teacher
                </Link>
              </Col>
            )}
          </Row>
          <div className="model-dash">
            <DataTable tableName="teacher" data={tech} columns={columns} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Teachers;
