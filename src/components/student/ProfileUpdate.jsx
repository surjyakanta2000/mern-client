import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { getSpecStudent, updateProfile } from "../../services/studentService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";
import Loader from "../common/Loader";

const ProfileUpdate = ({ match, history }) => {
  const [student, setStudent] = useState({});
  const [formData, setFormData] = useState("");

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const student = await getSpecStudent(match.params.id);
      setStudent(student);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("profilePic", files[0]);
    data.append("studentRoll", student.studentRoll);
    data.append("studentName", student.studentName);
    data.append("studentDept", student.studentDept._id);
    data.append("studentSemester", student.studentSemester);
    data.append("studentEmail", student.studentEmail);
    data.append("studentPhone", student.studentPhone);
    data.append("studentPassword", student.studentPassword);
    setFormData(data);
  };

  const handleSubmit = async () => {
    await updateProfile(student._id, formData);
    history.push("/dash");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <h1>Update Profile</h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Student Roll"
              type="text"
              placeholder="Enter Roll"
              name="studentRoll"
              value={student.studentRoll}
              handleChange={handleChange}
            />
            <Input
              label="Student Name"
              type="text"
              placeholder="Enter Name"
              name="studentName"
              value={student.studentName}
              handleChange={handleChange}
            />
            <InputDept
              handleChange={handleChange}
              value={student.studentDept}
              name="studentDept"
            />
            <InputSem
              handleChange={handleChange}
              value={student.studentSemester}
              name="studentSemester"
            />
            <Input
              label="Student Email"
              type="email"
              placeholder="Enter Email"
              name="studentEmail"
              value={student.studentEmail}
              handleChange={handleChange}
            />
            <Input
              label="Student Phone"
              type="text"
              placeholder="Enter Phone"
              name="studentPhone"
              value={student.studentPhone}
              handleChange={handleChange}
            />
            <Input
              label="Student Password"
              type="password"
              placeholder="Enter Password"
              name="studentPassword"
              value={student.studentPassword}
              handleChange={handleChange}
            />
            <Form.Group className="mb-3">
              <Form.Label>Choose a Passport Size Photo</Form.Label>
              <Form.Control type="file" onChange={Upload} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default ProfileUpdate;
