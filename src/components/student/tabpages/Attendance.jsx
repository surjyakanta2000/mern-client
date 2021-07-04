import { Table } from "react-bootstrap";
const Attendance = ({ attendList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr
          style={{
            color: "#5effe2",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
          }}
        >
          <th>Subject Name</th>
          <th>Class Attended</th>
          <th>Total Class</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {attendList.map((a) => {
          return (
            <tr
              key={a._id}
              style={{
                color: "#ffff",
              }}
            >
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
