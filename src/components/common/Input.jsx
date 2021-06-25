import { Form } from "react-bootstrap";
const Input = ({
  label,
  className,
  type,
  placeholder,
  name,
  value,
  handleChange,
  hidden,
  error,
}) => {
  return (
    <Form.Group className="mb-1 bg-tranparent" hidden={hidden}>
      <Form.Label>
        <h5>{label}</h5>
      </Form.Label>
      <Form.Control
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Input;
