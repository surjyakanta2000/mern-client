import { Table } from "react-bootstrap";
const Attendance = ({ attendList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Subject Name</th>
          <th>Class Attended</th>
          <th>Total Class</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {attendList.map((a) => {
          return (
            <tr key={a._id}>
              <td>{a.clsCode === null ? "" : a.clsCode.clsName}</td>
              <td>{a.attendedCls}</td>
              <td>{a.totalCls}</td>
              <td>{((a.attendedCls / a.totalCls) * 100).toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Attendance;
