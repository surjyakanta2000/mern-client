import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="primary"
      style={{
        width: "100px",
        height: "100px",
        marginLeft:"35vw",
        marginTop:"20vh"
      }}
    />
  );
};

export default Loader;
