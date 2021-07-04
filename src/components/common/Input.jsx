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
  disabled,
}) => {
  return (
    <Form.Group className="mb-1 bg-tranparent text-white" hidden={hidden}>
      <Form.Label>
        <h5
          style={{
            color: "#5effe2",
            textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
          }}
        >
          {label}
        </h5>
      </Form.Label>
      <Form.Control
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </Form.Group>
  );
};

export default Input;
