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
              <h3>Welcome To Attendance Dash</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                className="btn btn-lg btn-outline-primary"
                to={`/classes/${match.params.id}/attened/add`}
              >
                Take Attendance
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>Please Choose Date</Col>
            <Col>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleFilter}
                name="clsDate"
              >
                <option value="" defaultValue>
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
                <tr>
                  <th>Student Roll</th>
                  <th>Student Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((a, i) => {
                  return (
                    <tr key={i}>
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
