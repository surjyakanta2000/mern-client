import { Form } from "react-bootstrap";
const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
  hidden,
}) => {
  return (
    <Form.Group className="mb-1" hidden={hidden}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default Input;
