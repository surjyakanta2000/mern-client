import { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab, Table } from "react-bootstrap";
import { getSpecClass, getAssignments } from "../../services/classService";
import Loader from "../common/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StudentClassDash = ({ match }) => {
  const [cls, setCls] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const cls = await getSpecClass(match.params.id);
      setCls(cls);
      const assignments = await getAssignments(match.params.id);
      setAssignments(assignments);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col>
              <h3>Welcome To Class</h3>
            </Col>
            <Col>
              <h3>{cls.clsName}</h3>
            </Col>
          </Row>

          <Row>
            <Tabs defaultActiveKey="materials" fill>
              <Tab eventKey="materials" title="Materials">
                {cls.clsMaterials.lenth === 0 ||
                cls.clsMaterials === undefined ? (
                  <h2>No Material Found</h2>
                ) : (
                  <ul>
                    {cls.clsMaterials.map((c, i) => {
                      return (
                        <li key={i} className="fw-bold fs-3">
                          <a
                            href={
                              c.type === "file"
                                ? "http://localhost:8000/" + c.material
                                : c.material
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {c.materialName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </Tab>
              <Tab eventKey="assignment" title="Assignment">
                {assignments.lenth === 0 ? (
                  <h2>No Assignment Pending</h2>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <th>Notice Name</th>
                          <th>Date</th>
                          <th>Last Date</th>
                          <th>Response</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignments.map((assign) => {
                          return (
                            <tr key={assign._id}>
                              <td>{assign.assignName}</td>
                              <td>{assign.assignDate}</td>
                              <td>{assign.lastDate}</td>
                              <td>
                                <Link
                                  className="btn btn-success"
                                  to={`/classes/${assign._id}/assignment/response`}
                                  style={{ boder: "1px solid white" }}
                                >
                                  <FontAwesomeIcon
                                    style={{ boder: "1px solid white" }}
                                    icon={faReply}
                                  />
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </>
                )}
              </Tab>
            </Tabs>
          </Row>
        </Container>
      )}
    </>
  );
};

export default StudentClassDash;
