import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteNotice, getNotices } from "../../services/adminService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Notice = ({ match }) => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const notices = await getNotices();
      setNotices(notices);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteNotice(id);
    const notices = await getNotices();
    setNotices(notices);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Notice Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link
              className="btn btn-lg custom-btn"
              to={`/admin/dash/notice/add`}
            >
              Add New Notice
            </Link>
          </Col>
        </Row>
        <Row>
          {notices.length === 0 ? (
            <div className="d-flex justify-content-center">
              <h1 style={{ color: "white" }}>No notice found</h1>
            </div>
          ) : (
            <Table>
              <thead>
                <tr
                  style={{
                    color: "black",
                  }}
                >
                  <th>Notice Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => {
                  return (
                    <tr key={notice._id}>
                      <td>{notice.noticeName}</td>
                      <td>{notice.noticeDate}</td>
                      <td>
                        <Button
                          className="btn custom-btn"
                          onClick={() => handleDelete(notice._id)}
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
        </Row>
      </Container>
    </>
  );
};

export default Notice;
