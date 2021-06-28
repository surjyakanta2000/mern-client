import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteMaterial, getSpecClass } from "../../services/classService";
import Loader from "../common/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const StudyMaterials = ({ match }) => {
  const [cls, setCls] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const cls = await getSpecClass(match.params.id);
      setCls(cls);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (clsCode, materialId) => {
    await deleteMaterial(clsCode, materialId);
    const cls = await getSpecClass(match.params.id);
    setCls(cls);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col>
              <h3>Welcome To Class</h3>
            </Col>
            <Col>
              <h3>{cls.clsName}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                className="btn btn-lg btn-outline-primary"
                to={`/classes/${match.params.id}/studymaterials/add`}
              >
                Add New Materials
              </Link>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cls.clsMaterials.map((c, i) => {
                  return (
                    <tr key={i}>
                      <td>{c.materialName}</td>
                      <td>{c.date}</td>
                      <td>
                        <Button
                          className="btn bg-light"
                          onClick={() => handleDelete(cls._id, c._id)}
                        >
                          <FontAwesomeIcon color="red" icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      )}
    </>
  );
};

export default StudyMaterials;
