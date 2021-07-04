import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addSubject } from "../../services/subService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";

const AddSubject = ({ history }) => {
  const [sub, setSub] = useState({
    subCode: "",
    subName: "",
    subDept: "",
    subSemester: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSub({ ...sub, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await addSubject(sub);
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/subjects");
  };

  return (
    <Container>
      <h1
        style={{
          color: "#5effe2",
          textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
        }}
      >
        Add Subject
      </h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Subject Code"
          type="text"
          className="bg-transparent text-white"
          placeholder="Enter Subject Code"
          name="subCode"
          value={sub.subCode}
          handleChange={handleChange}
        />
        <Input
          label="Subject Name"
          type="text"
          className="bg-transparent text-white"
          placeholder="Enter subject name"
          name="subName"
          value={sub.subName}
          handleChange={handleChange}
        />
        <InputDept
          handleChange={handleChange}
          value={sub.subDept}
          name="subDept"
        />
        <InputSem
          handleChange={handleChange}
          value={sub.subSemester}
          name="subSemester"
        />
        <div className="d-flex justify-content-center">
          <Button
            style={{ width: "30%" }}
            onClick={handleSubmit}
            className="custom-btn mt-4"
            type="submit"
          >
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddSubject;
