import { Table, Button } from "react-bootstrap";
import _ from "lodash";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { deleteTeacher, getTeacher } from "../../services/techService";
import { getSubject, deleteSubject } from "../../services/subService";
import { deleteStudent, getStudent } from "../../services/studentService";
import { getCurrentUser } from "../../services/userService";

const DataTable = ({ tableName, data, columns }) => {
  const [info, setInfo] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
    setInfo(data);
    // eslint-disable-next-line
  }, []);
  const handleDelete = async (id) => {
    let info;
    if (tableName === "teacher") {
      await deleteTeacher(id);
      info = await getTeacher();
    }
    if (tableName === "subject") {
      await deleteSubject(id);
      info = await getSubject();
    }
    if (tableName === "student") {
      await deleteStudent(id);
      info = await getStudent();
    }
    setInfo(info);
  };

  const getCellItem = (item, column) => {
    if (column.label === "Edit" && user && user.role === "admin") {
      return (
        <Link className="btn bg-light" to={`${column.value}${item._id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      );
    }
    if (column.label === "Delete" && user && user.role === "admin") {
      return (
        <Button className="btn bg-light" onClick={() => handleDelete(item._id)}>
          <FontAwesomeIcon color="red" icon={faTrash} />
        </Button>
      );
    }
    return _.get(item, column.value);
  };

  return (
    <>
      {info.length === 0 ? (
        <h2 className="text-center text-primary fw-bold mt-2">
          No Record Found
        </h2>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {columns.map((column) => {
                  if (column.label === "Edit" || column.label === "Delete") {
                    if (!user || user === undefined) {
                      return null;
                    }
                    if (user && user.role !== "admin") {
                      return null;
                    }
                  }

                  return <th key={column.value}>{column.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {info.map((item) => {
                return (
                  <tr key={item._id}>
                    {columns.map((column) => {
                      return (
                        <td
                          className={"text-" + column.color}
                          key={column.value}
                        >
                          {getCellItem(item, column)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default DataTable;
