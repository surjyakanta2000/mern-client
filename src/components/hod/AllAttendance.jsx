import { useState } from "react";
import { Table } from "react-bootstrap";
import { TableExport } from "tableexport";
import InputSem from "../common/InputSem";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const AllAttendance = ({ attendanceList }) => {
  const [order, setOrder] = useState("");
  const [sortCol, setSortCol] = useState("");

  const columns = [
    { label: "Student Roll", value: "student.studentRoll" },
    { label: "Student Name", value: "student.studentName" },
    { label: "Class Attended", value: "attended" },
    { label: "Total Classes", value: "total" },
    { label: "Percentage", value: "percentage" },
  ];

  const [attendance, setAttendance] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    const filteredData = attendanceList.filter(
      (a) => a.student.studentSemester === value
    );
    const sortedData = _.orderBy(filteredData, [columns[0].value], ["asc"]);
    setAttendance(sortedData);
  };

  //sort the table
  const handleSort = (column, order) => {
    let newOrder = order === "asc" ? "desc" : "asc";
    const sortedData = _.orderBy(attendance, [column], [newOrder]);
    setOrder(newOrder);
    setAttendance(sortedData);
    setSortCol(column);
  };

  //export the table
  const handleExport = async () => {
    TableExport(document.getElementsByTagName("table"));
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <h2
          style={{
            color: "#5effe2",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
          }}
        >
          Attendance Report
        </h2>
        <button
          className="btn btn-warning"
          onClick={handleExport}
          disabled={attendance.length === 0}
        >
          Export
        </button>
      </div>
      <form className="form-inline">
        <div style={{ width: "30%" }}>
          <InputSem value="" name="semester" handleChange={handleChange} />
        </div>
      </form>
      <Table className="mt-2">
        <thead>
          <tr
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            {columns.map((column) => {
              return (
                <th
                  key={column.value}
                  onClick={() => handleSort(column.value, order)}
                >
                  {column.label}{" "}
                  {sortCol === column.value && (
                    <FontAwesomeIcon
                      icon={order === "asc" ? faSortUp : faSortDown}
                    />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {attendance.map((a, i) => {
            return (
              <tr
                key={i}
                style={{
                  color: "white",
                }}
              >
                <td>{a.student.studentRoll}</td>
                <td>{a.student.studentName}</td>
                <td>{a.attended}</td>
                <td>{a.total}</td>
                <td>{a.percentage}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AllAttendance;
