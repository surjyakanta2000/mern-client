import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { getResponses } from "../../services/classService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AllResponses = ({ match }) => {
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const responses = await getResponses(match.params.id);
      setResponses(responses);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Roll</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Date Of Submission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((r) => {
              return (
                <tr key={r._id}>
                  <td>{r.studentRoll}</td>
                  <td>{r.studentName}</td>
                  <td>{r.studentEmail}</td>
                  <td>{r.dateOfSub}</td>
                  <td>
                    <a
                      className="btn btn-success"
                      style={{ boder: "1px solid white" }}
                      href={`http://localhost:8000/${r.assignFile}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        style={{ boder: "1px solid white" }}
                        icon={faEye}
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AllResponses;
