import { Route, Redirect } from "react-router-dom";
import AddDept from "../components/department/AddDept";
import Departments from "../components/department/Departments";
import EditDept from "../components/department/EditDept";
const DeptRoutes = ({ user }) => {
  return (
    <>
      <Route
        exact
        path="/departments"
        render={() => <Departments user={user} />}
      />

      <Route
        exact
        path="/departments/add"
        render={(props) =>
          user && user.role === "admin" ? (
            <AddDept {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />

      <Route
        exact
        path="/departments/update/:id"
        render={(props) =>
          user && user.role === "admin" ? (
            <EditDept {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default DeptRoutes;
