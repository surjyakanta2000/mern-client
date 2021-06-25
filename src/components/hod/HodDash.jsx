import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getCurrentUser } from "../../services/userService";
import { getSpecTeacher } from "../../services/techService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { getClassForTeacher } from "../../services/classService";
import HodTab from "./HodTab";
import defaultProfilePic from "../../images/defaultProfilePic.png";
import { Link } from "react-router-dom";

const HodDash = () => {
  const [tech, setTeacher] = useState({});
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      const teacherData = await getSpecTeacher(user._id);
      setTeacher(teacherData);
      const classes = await getClassForTeacher(teacherData._id);
      setClasses(classes);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>Welcome to HOD Dashboard...</h3>
          </Col>
          <hr></hr>
        </Row>

        <Row>
          <Col md={{ span: 1, offset: 1 }} className="text-center">
            <img
              className="img-thumbnail text-center"
              src={
                tech.profilePic &&
                tech.profilePic !== undefined &&
                tech.profilePic !== "" &&
                tech.profilePic !== null
                  ? `http://localhost:8000/${tech.profilePic}`
                  : defaultProfilePic
              }
              alt={tech.techName}
              height="100px"
              width="100px"
            />
          </Col>
          <Col md={{ span: 5, offset: 0 }}>
            <Row>
              <Col xs={6} md={4}>
                <h3>Name</h3>
              </Col>
              <Col xs={6} md={8}>
                <h3>{tech.techName}</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <h4>Email</h4>
              </Col>
              <Col xs={6} md={8}>
                <h4>{tech.techEmail}</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <h5>Phone</h5>
              </Col>
              <Col xs={6} md={8}>
                <h5>{tech.techPhone}</h5>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 2, offset: 1 }} className="text-center">
            <Link
              className="btn"
              to={`/profile/update/${tech._id}`}
              title="Edit Profile"
            >
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </Col>
        </Row>
        <Row>
          <HodTab tech={tech} classes={classes} />
        </Row>
      </Container>
    </>
  );
};

export default HodDash;
