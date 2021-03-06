import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = ({ user }) => {
  return (
    <Navbar bg="primary" variant="light" style={{ border: "none" }}>
      <NavLink
        to="/"
        className="navbar-brand fw-bold"
        style={{
          color: "#0c0c0c",
        }}
      >
        LMS
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            style={{
              color: "#0c0c0c",
            }}
            activeClassName="menu_active"
            to="/departments"
            className="nav-link "
          >
            Department
          </NavLink>
          <NavLink
            style={{
              color: "#0c0c0c",
            }}
            activeClassName="menu_active"
            to="/teachers"
            className="nav-link "
          >
            Teacher
          </NavLink>
          <NavLink
            style={{
              color: "#0c0c0c",
            }}
            activeClassName="menu_active"
            to="/subjects"
            className="nav-link "
          >
            Subject
          </NavLink>
          <NavLink
            style={{
              color: "#0c0c0c",
            }}
            activeClassName="menu_active"
            to="/students"
            className="nav-link "
          >
            Student
          </NavLink>
          {!user && (
            <NavLink
              style={{
                color: "#0c0c0c",
              }}
              to="/login"
              activeClassName="menu_active"
              className="nav-link "
            >
              Login
            </NavLink>
          )}
          {user && user !== undefined && (
            <>
              <NavLink
                style={{
                  color: "#0c0c0c",
                }}
                activeClassName="menu_active"
                to="/dash"
                className="nav-link "
              >
                {user.name}
              </NavLink>
              <NavLink
                style={{
                  color: "#0c0c0c",
                }}
                activeClassName="menu_active"
                to="/logout"
                className="nav-link "
              >
                Logout
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
