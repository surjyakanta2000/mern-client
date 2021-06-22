import { Route, Redirect } from "react-router-dom";
import Teachers from "../components/teacher/Teachers";
import EditTeacher from "../components/teacher/EditTeacher";
import AddTeacher from "../components/teacher/AddTeacher";

const TechRoutes = ({ user }) => {
  return (
    <>
      <Route exact path="/teachers" render={() => <Teachers user={user} />} />
      <Route
        exact
        path="/teachers/add"
        render={(props) =>
          user && user.role === "admin" ? (
            <AddTeacher {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
      <Route
        exact
        path="/teachers/update/:id"
        render={(props) =>
          user && user.role === "admin" ? (
            <EditTeacher {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default TechRoutes;
