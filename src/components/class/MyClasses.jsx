import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyClasses = ({ classes }) => {
  return (
    <>
      <h1>My Classes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Subject Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => {
            return (
              <tr key={c._id}>
                <td>{c.clsName}</td>
                <td>{c.clsSubject.subCode}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-primary"
                    to={`/classes/${c._id}`}
                  >
                    GoTo Class
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyClasses;
