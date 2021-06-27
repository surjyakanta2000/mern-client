import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = ({ user }) => {
  return (
    <Navbar bg="transparent" style={{ border: "none" }}>
      <NavLink to="/" className="navbar-brand fw-bold text-warning ">
        E-Learning
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            activeClassName="menu_active"
            to="/departments"
            className="nav-link "
          >
            Department
          </NavLink>
          <NavLink
            activeClassName="menu_active"
            to="/teachers"
            className="nav-link "
          >
            Teacher
          </NavLink>
          <NavLink
            activeClassName="menu_active"
            to="/subjects"
            className="nav-link "
          >
            Subject
          </NavLink>
          <NavLink
            activeClassName="menu_active"
            to="/students"
            className="nav-link "
          >
            Student
          </NavLink>
          {!user && (
            <NavLink
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
                activeClassName="menu_active"
                to="/dash"
                className="nav-link "
              >
                {user.name}
              </NavLink>
              <NavLink
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
