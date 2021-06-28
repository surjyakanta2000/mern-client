import { Row, Col, Image, Container } from "react-bootstrap";
import homeTeacher from "../images/homeTeacher.png";
import homePage from "../images/homePage.jpg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNotices } from "../services/adminService";
const Home = ({ user }) => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const notices = await getNotices();
      setNotices(notices);
    };
    getData();
  }, []);
  console.log(notices);
  return (
    <>
      <Container>
        <Row>
          <Col
            md={{ span: 6, offset: -1 }}
            style={{
              borderBottom: "2px solid",
              borderColor: "dark",
              height: "3.5rem",
              background: "transparent",
              marginTop: "1rem",
            }}
          >
            <Marquee width="100%" speed="50">
              <h1 className="text-dark fw-bold">
                Welcome to <span className="text-warning">E-Learning..</span>
              </h1>
            </Marquee>
            {!user ? (
              <Row>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    borderBottom: "2px",
                    background: "transparent",
                    marginTop: "4rem",
                    position: "relative",
                  }}
                >
                  <div style={{ zIndex: "100" }}>
                    <Image src={homePage} className="img-thumbnail mb-0" />
                  </div>
                </Col>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <h6>
                    Hello Hope You have a nice Exprience With Our Website..Click
                    To.
                    <Link className="btn btn-outline-primary" to="/login">
                      Login Here
                    </Link>
                  </h6>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    borderBottom: "2px",
                    background: "transparent",
                    marginTop: "1rem",
                  }}
                >
                  <div style={{ zIndex: "100" }}>
                    <Image src={homePage} className="img-thumbnail mb-0" />
                  </div>
                </Col>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <h6>
                    Hello <span className="fw-bold text-dark">{user.name}</span>{" "}
                    Hope You have a nice Exprience With Our Website..Click To.
                    <Link className="btn btn-outline-warning" to="/dash">
                      Your Profile
                    </Link>
                  </h6>
                </Col>
              </Row>
            )}
          </Col>
          <Col md={{ span: 6, offset: 7 }}>
            <div style={{ zIndex: "100" }}>
              <Image src={homeTeacher} className="img-fluid mb-0" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
