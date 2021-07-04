import { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAttendDateWise } from "../../services/classService";
import _ from "lodash";
import Loader from "../common/Loader";

const Attendance = ({ match }) => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const attendance = await getAttendDateWise(match.params.id);
      const dates = _.map(attendance, "clsDate");
      setAttendanceList(attendance);
      setDates(dates);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleFilter = (e) => {
    const { value: date } = e.target;
    let index = attendanceList.findIndex((a) => a.clsDate === date);
    if (index === -1) {
      setData([]);
    } else {
      setData(attendanceList[index].data);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col>
              <h3
                style={{
                  color: "#5effe2",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                Welcome To Attendance Dash
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                className="btn btn-lg custom-btn"
                to={`/classes/${match.params.id}/attened/add`}
              >
                Take Attendance
              </Link>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              style={{
                color: "#5effe2",
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
              }}
              className="fw-bold"
            >
              <h3>Please Choose Date</h3>
            </Col>
            <Col>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleFilter}
                name="clsDate"
              >
                <option
                  value=""
                  defaultValue
                  style={{
                    color: "#5effe2",
                    textShadow:
                      "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  }}
                >
                  Select Date
                </option>
                {dates.map((date, i) => {
                  return (
                    <option key={i} value={date}>
                      {date}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row>
            <Table>
              <thead>
                <tr
                  style={{
                    color: "#5effe2",
                    textShadow:
                      "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  }}
                >
                  <th>Student Roll</th>
                  <th>Student Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((a, i) => {
                  return (
                    <tr
                      key={i}
                      style={{
                        color: "#ffff",
                      }}
                    >
                      <td>{a.studentRoll}</td>
                      <td>{a.studentName}</td>
                      <td>{a.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Attendance;
