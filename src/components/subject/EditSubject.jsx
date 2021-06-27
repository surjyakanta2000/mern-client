import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getSpecSubject, updateSubject } from "../../services/subService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";

const EditSubject = ({ history, match }) => {
  const [sub, setSub] = useState({
    subCode: "",
    subName: "",
    subDept: "",
    subSemester: "",
  });
  const [err, setErr] = useState("");

  useEffect(() => {
    const getSpecData = async () => {
      const sub = await getSpecSubject(match.params.id);
      setSub(sub);
    };
    getSpecData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSub({ ...sub, [name]: value });
  };
  const handleSubmit = async () => {
    const updateSub = {
      subCode: sub.subCode,
      subName: sub.subName,
      subDept: sub.subDept._id !== undefined ? sub.subDept._id : sub.subDept,
      subSemester: sub.subSemester,
    };
    const res = await updateSubject(sub._id, updateSub);
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/subjects");
  };
  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Subject Code"
          type="text"
          placeholder="Enter Subject Code"
          name="subCode"
          value={sub.subCode}
          handleChange={handleChange}
        />
        <Input
          label="Subject Name"
          type="text"
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
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditSubject;
