import { Form } from "react-bootstrap";
import _ from "lodash";

const InputSem = ({ name, value, handleChange }) => {
  const semesters = _.range(1, 9);
  return (
    <Form.Group className="mb-1 input-form bg-transparent">
      <Form.Label
        style={{
          color: "#5effe2",
          textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
        }}
      >
        Semester
      </Form.Label>
      <Form.Control
        style={{ color: "#5effe2" }}
        className="bg-transparent"
        as="select"
        name={name}
        onChange={handleChange}
      >
        {value === "" ? (
          <option value="">Select Semester</option>
        ) : (
          <option value={value}>{value}</option>
        )}
        {semesters.map((s) => {
          return (
            <option key={s} value={s}>
              {s}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default InputSem;
