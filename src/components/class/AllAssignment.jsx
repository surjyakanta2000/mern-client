import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { deleteAssignment, getAssignments } from "../../services/classService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";

const AllAssignents = ({ match }) => {
  const [assignments, setAssignments] = useState([]);
  const [loader, setLoader] = useState(true);
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Date</th>
              <th>Responses</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => {
              return (
                <tr key={a._id}>
                  <td>{a.assignName}</td>
                  <td>{a.assignDate}</td>
                  <td>
                    <Link
                      className="btn "
                      to={`/assignment/${a._id}/responses`}
                    >
                      <FontAwesomeIcon icon={faEye} />
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
      )}
    </>
  );
};

export default AllAssignents;
