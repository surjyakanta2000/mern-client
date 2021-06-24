import { Link } from "react-router-dom";

const Assignment = ({ match }) => {
  return (
    <>
      <h2>All Assignments</h2>
      <Link
        className="btn btn-outline-success"
        to={`/classes/${match.params.id}/assignment/add`}
      >
        Add Assignment
      </Link>
      <Link
        className="btn btn-outline-success"
        to={`/classes/${match.params.id}/assignment/all`}
      >
        All Assignment
      </Link>
    </>
  );
};

export default Assignment;
