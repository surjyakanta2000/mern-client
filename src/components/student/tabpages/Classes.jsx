import { Table } from "react-bootstrap";
const Classes = ({ classes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Subject Code</th>
          <th>Teacher Name</th>
          <th>Semester</th>
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
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Classes;
