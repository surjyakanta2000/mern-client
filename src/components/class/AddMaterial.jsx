import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../common/Input";
import { addMaterial } from "../../services/classService";

const AddMaterial = ({ history, match }) => {
  const [formData, setFormData] = useState("");
  const [material, setMaterial] = useState({
    materialName: "",
    material: "",
    clsCode: "",
  });
  const [type, setType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterial({ ...material, [name]: value });
    if (e.target.name === "type") {
      setType(e.target.value);
    }
  };
  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("material", files[0]);
    data.append("clsCode", match.params.id);
    data.append("type", type);
    data.append("materialName", material.materialName);
    setFormData(data);
  };
  const handleSubmit = async () => {
    if (type === "file") {
      await addMaterial(formData);
      history.push("/dash");
    }
    if (type === "link") {
      material.clsCode = match.params.id;
      await addMaterial(material);
    }
    history.goBack();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <h2
              className="text-center"
              style={{
                color: "#5effe2",
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
              }}
            >
              Add Material
            </h2>
            <Input
              label="Material Name"
              type="text"
              className="bg-transparent text-white"
              placeholder="Enter Material Name"
              name="materialName"
              value={material.materialName}
              handleChange={handleChange}
            />
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="type"
            >
              <option defaultValue value="">
                Choose Material Type
              </option>
              <option value="file">File</option>
              <option value="link">Link</option>
            </select>

            <Input
              label="Material Link"
              type="text"
              className="bg-transparent text-white"
              placeholder="Enter Material Link"
              name="material"
              value={material.material}
              handleChange={handleChange}
              hidden={type !== "link"}
            />
            <Form.Group className="mb-3" hidden={type !== "file"}>
              <Form.Label>Choose a File</Form.Label>
              <Form.Control type="file" onChange={Upload} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button
                style={{ width: "30%" }}
                onClick={handleSubmit}
                variant="primary"
                className="btn custom-btn mt-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMaterial;
