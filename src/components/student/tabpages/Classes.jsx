import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
          <th>Asssignment</th>
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
                  className="btn"
                  to={`/classes/${c._id}/assignment/response`}
                >
                  <FontAwesomeIcon icon={faEye} />
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
