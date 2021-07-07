import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Classes = ({ classes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Subject Code</th>
          <th>Teacher Name</th>
          <th>Semester</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((c) => {
          return (
            <tr key={c._id}>
              <td>{c.clsName}</td>
              <td>{c.clsSubject.subCode}</td>
              <td>{c.clsTeacher !== null ? c.clsTeacher.techName : ""}</td>
              <td>{c.clsSemester}</td>
              <td>
                <Link
                  className="btn btn-success"
                  to={`/classes/${c._id}/studentclass`}
                >
                  Goto Class <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Classes;
