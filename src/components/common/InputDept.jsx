import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { getDept } from "../../services/deptService";
const InputDept = ({ name, value, handleChange }) => {
  const [dept, setDept] = useState([]);
  useEffect(() => {
    const deptData = async () => {
      const dept = await getDept();
      setDept(dept);
    };
    deptData();
  }, []);
  return (
    <Form.Group className="mb-1 input-form">
      <Form.Label>Department</Form.Label>
      <Form.Control as="select" name={name} onChange={handleChange}>
        {value === "" ? (
          <option value="">Select Department</option>
        ) : (
          <option value={value._id}>{value.deptName}</option>
        )}
        {dept.map((d) => {
          return (
            <option key={d._id} value={d._id}>
              {d.deptName}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default InputDept;
