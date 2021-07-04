import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSubject, deleteSubject } from "../../services/subService";
import Loader from "../common/Loader";
import DataTable from "../common/DataTable";

const Subjects = ({ user }) => {
  const [sub, setSub] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const sub = await getSubject();
      setSub(sub);
      setLoader(false);
    };
    getData();
  }, []);
  const columns = [
    { label: "Subject Code", value: "subCode" },
    { label: "Subject Name", value: "subName" },
    { label: "Subject Department", value: "subDept.deptCode" },
    { label: "Subject Semester", value: "subSemester" },
    { label: "Edit", value: "/subjects/update/" },
    { label: "Delete", value: "delete" },
  ];

  const handleDelete = async (id) => {
    await deleteSubject(id);
    const sub = await getSubject();
    setSub(sub);
  };
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
                Subjects..
              </h2>
            </Col>
            {user && user.role === "admin" && (
              <Col sm={4}>
                <Link className="btn btn-primary" to="/subjects/add">
                  Add Subject
                </Link>
              </Col>
            )}
          </Row>
          <DataTable
            tableName="subject"
            data={sub}
            columns={columns}
            handleDelete={handleDelete}
          />
        </>
      )}
    </Container>
  );
};

export default Subjects;
