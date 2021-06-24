import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, Table, Button } from "react-bootstrap";
import {
  getSpecClass,
  getStudentForClass,
  takeStudentAttendance,
} from "../../services/classService";
const TakeAttened = ({ match }) => {
  const [students, setStudents] = useState([]);
  const [newAttend, setNewAttend] = useState({
    clsCode: "",
    clsDate: "",
    student: "",
    status: "",
  });
  const [currentClass, setCurrentClass] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const currentClass = await getSpecClass(match.params.id);
      setCurrentClass(currentClass);
      const students = await getStudentForClass(
        currentClass.clsDept,
        currentClass.clsSemester
      );
      setStudents(students);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (s, key) => {
    const newAttened = {
      clsCode: currentClass._id,
      clsDate: getDate(),
      student: s._id,
      status: key,
    };
    setNewAttend(newAttend);
    await takeStudentAttendance(newAttened);
  };

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  return (
    <Container>
      <h1>class name : {currentClass.clsName}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Roll</th>
            <th>Student Name</th>
            <th className="text-center">Attendence</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            return (
              <tr key={s._id}>
                <td>{s.studentRoll}</td>
                <td>{s.studentName}</td>
                <td className="d-flex justify-content-around">
                  <Button onClick={() => handleSubmit(s, "p")}>
                    <FontAwesomeIcon
                      className="text-success bg-transparent"
                      icon={faCheck}
                    />
                  </Button>
                  <Button onClick={() => handleSubmit(s, "a")}>
                    <FontAwesomeIcon
                      className="text-danger bg-transparent"
                      icon={faTimes}
                    />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TakeAttened;
