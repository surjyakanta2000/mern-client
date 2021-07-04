import { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { deleteAssignment, getAssignments } from "../../services/classService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";

const AllAssignents = ({ match }) => {
  const [assignments, setAssignments] = useState([]);
  const [loader, setLoader] = useState(true);
  // console.log(match.params.id);
  useEffect(() => {
    const getData = async () => {
      const assignments = await getAssignments(match.params.id);
      setAssignments(assignments);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await deleteAssignment(id);
    const assignments = await getAssignments(match.params.id);
    setAssignments(assignments);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container className="mt-3">
          <div className="d-flex justify-content-center">
            <h2
              style={{
                color: "#5effe2",
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
              }}
            >
              All Assignments.
            </h2>
          </div>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr
                style={{
                  color: "#5effe2",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                <th>Assignment Name</th>
                <th>Date</th>
                <th>Responses</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => {
                return (
                  <tr
                    key={a._id}
                    style={{
                      color: "#ffff",
                    }}
                  >
                    <td>{a.assignName}</td>
                    <td>{a.assignDate}</td>
                    <td>
                      <Link
                        className="btn btn-success"
                        style={{ boder: "1px solid white" }}
                        to={`/assignment/${a._id}/responses`}
                      >
                        <FontAwesomeIcon
                          style={{ boder: "1px solid white" }}
                          icon={faEye}
                        />
                      </Link>
                    </td>
                    <td>
                      <Button
                        className="btn bg-light"
                        onClick={() => handleDelete(a._id)}
                      >
                        <FontAwesomeIcon color="red" icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default AllAssignents;
