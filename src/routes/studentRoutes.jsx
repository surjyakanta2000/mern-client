import { Route, Redirect } from "react-router-dom";
import AddStudent from "../components/student/AddStudent";
import EditStudent from "../components/student/EditStudent";
import Students from "../components/student/Students";
const StudentRoutes = ({ user }) => {
  return (
    <>
      <Route exact path="/students" render={() => <Students user={user} />} />
      <Route
        exact
        path="/students/add"
        render={(props) =>
          user && user.role === "admin" ? (
            <AddStudent {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
      <Route
        exact
        path="/students/update/:id"
        render={(props) =>
          user && user.role === "admin" ? (
            <EditStudent {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default StudentRoutes;
