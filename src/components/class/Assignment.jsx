import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Assignment = ({ id }) => {
  return (
    <>
      <h2>All Assignments</h2>
      <Link className="btn btn-outline-success" to={`/assignment/new/`}>
        Add Assignment
      </Link>
      <Link className="btn btn-outline-success" to={`/assignment/${id}/all`}>
        All Assignment
      </Link>
    </>
  );
};

export default Assignment;
