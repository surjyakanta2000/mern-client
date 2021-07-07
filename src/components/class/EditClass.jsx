import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import {
  getSubForDept,
  getSpecClass,
  updateClass,
} from "../../services/classService";
import { getTeacher } from "../../services/techService";
import { getCurrentUser } from "../../services/userService";
import Input from "../common/Input";
import InputSem from "../common/InputSem";

const EditClass = ({ history, match }) => {
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
      const cls = await getSpecClass(match.params.id);
      setCls(cls);
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
    await updateClass(cls._id, {
      clsName: cls.clsName,
      clsDept: cls.clsDept,
      clsSubject: cls.clsSubject._id,
      clsTeacher: cls.clsTeacher._id,
      clsSemester: cls.clsSemester,
    });
    history.push("/dash");
  };
  return (
    <Container>
      <h2>Update Class</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Class Name"
          type="text"
          placeholder="Enter Class Name"
          className="bg-transparent text-dark"
          name="clsName"
          value={cls.clsName}
          handleChange={handleChange}
        />
        <Form.Group className="mb-1">
          <Form.Label>Department</Form.Label>
          <Form.Control as="select" name="clsDept" onChange={handleChange}>
            <option value={cls.clsDept}>{user.deptName}</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="select" name="clsSubject" onChange={handleChange}>
            {cls.clsSubject === "" ? (
              <option value="">Select Subject</option>
            ) : (
              <option value={cls.clsSubject._id}>
                {cls.clsSubject.subName}
              </option>
            )}

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
          <Form.Label>Teacher</Form.Label>
          <Form.Control as="select" name="clsTeacher" onChange={handleChange}>
            {cls.clsTeacher === "" ? (
              <option value="">Select Teacher</option>
            ) : (
              <option value={cls.clsTeacher._id}>
                {cls.clsTeacher.techName}
              </option>
            )}
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
          handleChange={handleChange}
        />
        <div className="d-flex justify-content-center">
          <button
            style={{ width: "30%" }}
            onClick={handleSubmit}
            variant="primary"
            className="btn custom-btn mt-4"
            type="submit"
          >
            Update
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default EditClass;
