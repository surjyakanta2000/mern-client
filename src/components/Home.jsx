import { Row, Col, Image, Container } from "react-bootstrap";
import homeTeacher from "../images/homeTeacher.png";
import homePage1 from "../images/homePage1.jpg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
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
                Welcome to <span className="text-primary">LMS </span>
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
                    <Image src={homePage1} className="img-thumbnail mb-0" />
                  </div>
                </Col>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <h6>
                    Hello User Hope You have a nice Exprience With Our
                    Website..Click To.
                    <Link className="btn btn-outline-primary" to="/login">
                      Login Here
                    </Link>
                  </h6>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                  <Link to="/notice">
                    <h4>Notice</h4>
                  </Link>
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
                    <Image src={homePage1} className="img-thumbnail mb-0" />
                  </div>
                </Col>
                <Col
                  md={{ span: 6, offset: 3 }}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <h6>
                    Hello <span className="fw-bold">{user.name}</span> Hope You
                    have a nice Exprience With Our Website..Click To.
                    <Link className="btn btn-outline-warning" to="/dash">
                      Your Profile
                    </Link>
                  </h6>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                  <Link to="/notice">
                    <h4>Notice</h4>
                  </Link>
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
