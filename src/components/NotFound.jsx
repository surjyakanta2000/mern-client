import { Link } from "react-router-dom";
import "../css/notFound.css";

const NotFound = () => {
  return (
    <div className="error-page-container">
      <img
        src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg"
        alt="404"
      />

      <h4>Oopps! The page you were looking doesn't exist.</h4>

      <p>
        <Link to="/" className="button">
          Go to home page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
