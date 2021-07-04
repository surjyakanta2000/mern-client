import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { getNotices } from "../services/adminService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const notices = await getNotices();
      setNotices(notices);
    };
    getData();
  }, []);
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr
              style={{
                color: "#5effe2",
                textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
              }}
            >
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => {
              return (
                <tr
                  key={n._id}
                  style={{
                    color: "#ffff",
                  }}
                >
                  <td>{n.noticeName}</td>
                  <td>{n.noticeDate}</td>
                  <td>
                    <a
                      className="btn btn-success"
                      style={{ boder: "1px solid white" }}
                      href={`http://localhost:8000/${n.noticeFile}`}
                      target="_blank"
                      rel="noreferrer"
                      download
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

export default Notice;
