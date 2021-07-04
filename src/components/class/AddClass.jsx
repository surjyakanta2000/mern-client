import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addClass, getSubForDept } from "../../services/classService";
import { getTeacher } from "../../services/techService";
import { getCurrentUser } from "../../services/userService";
import Input from "../common/Input";
import InputSem from "../common/InputSem";

const AddClass = ({ history }) => {
  const [cls, setCls] = useState({
    clsName: "",
    clsDept: "",
    clsSubject: "",
    clsTeacher: "",
    clsSemester: "",
  });
  const [sub, setSub] = useState([]);
  const [tech, setTech] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getHod = async () => {
      const user = getCurrentUser();
      setUser(user);
      cls.clsDept = user.deptId;
      const sub = await getSubForDept(user.deptId);
      setSub(sub);
      const tech = await getTeacher(user.deptId);
      setTech(tech);
    };
    getHod();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCls({ ...cls, [name]: value });
  };
  const handleSubmit = async () => {
    await addClass(cls);
    history.push("/dash");
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Class Name"
          type="text"
          className="bg-transparent text-white"
          placeholder="Enter Class Name"
          name="clsName"
          value={cls.clsName}
          handleChange={handleChange}
        />
        <Form.Group className="mb-1">
          <Form.Label
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            Department
          </Form.Label>
          <Form.Control as="select" name="clsDept" onChange={handleChange}>
            <option value={cls.clsDept}>{user.deptName}</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            Subject
          </Form.Label>
          <Form.Control as="select" name="clsSubject" onChange={handleChange}>
            <option value="">Select Subject</option>
            {sub.map((s) => {
              return (
                <option key={s._id} value={s._id}>
                  {s.subName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label
            style={{
              color: "#5effe2",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            Teacher
          </Form.Label>
          <Form.Control as="select" name="clsTeacher" onChange={handleChange}>
            <option value="">Select Teacher</option>
            {tech.map((t) => {
              return (
                <option key={t._id} value={t._id}>
                  {t.techName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <InputSem
          name="clsSemester"
          value={cls.clsSemester}
          className="bg-transparent text-white"
          handleChange={handleChange}
        />
        <div className="d-flex justify-content-center">
          <button
            style={{ width: "30%" }}
            onClick={handleSubmit}
            variant="primary"
            className="btn custom-btn mt-2"
            type="submit"
          >
            Add Class
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default AddClass;
