import { Row, Col, Image, Container } from "react-bootstrap";
import homeTeacher from "../images/homeTeacher.png";
import Marquee from "react-fast-marquee";
import Login from "./Login";
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
                Welcome to <span className="text-warning">E-Learning..</span>
              </h1>
            </Marquee>
            {!user ? (
              <Login />
            ) : (
              <Col md={{ span: 5, offset: 3 }} className="d-block">
                <h3 className="mt-3rem">
                  Hi. <span className="fw-bold text-dark">{user.name}</span>
                </h3>

                <Link className="btn btn-outline-warning" to="/dash">
                  GoTo Dashboard
                </Link>
              </Col>
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
