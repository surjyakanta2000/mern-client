import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyClasses = ({ classes }) => {
  return (
    <>
      <h1
        style={{
          color: "#5effe2",
          textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
        }}
      >
        My Classes
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            <th>Class Name</th>
            <th>Subject Code</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => {
            return (
              <tr
                style={{
                  color: "white",
                }}
                key={c._id}
              >
                <td>{c.clsName}</td>
                <td>{c.clsSubject.subCode}</td>
                <td>{c.clsSemester}</td>
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
