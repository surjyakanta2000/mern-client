import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = ({ user }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <NavLink to="/" className="navbar-brand">
        E-Learning
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/departments" className="nav-link">
            Department
          </NavLink>
          <NavLink to="/teachers" className="nav-link">
            Teacher
          </NavLink>
          <NavLink to="/subjects" className="nav-link">
            Subject
          </NavLink>
          <NavLink to="/students" className="nav-link">
            Student
          </NavLink>
          {!user && (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
          {user && user !== undefined && (
            <>
              <NavLink to="/dash" className="nav-link">
                {user.name}
              </NavLink>
              <NavLink to="/logout" className="nav-link">
                Logout
              </NavLink>
            </>
          )}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;