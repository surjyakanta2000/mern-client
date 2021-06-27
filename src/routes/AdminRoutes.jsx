import { Route, Redirect } from "react-router-dom";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";

const AdminRoutes = ({ user }) => {
  return (
    <>
      <Route
        exact
        path="/admin/login"
        render={(props) =>
          !user || user === undefined ? (
            <AdminLogin {...props} />
          ) : (
            <Redirect from="/admin/dash" to="/admin/login" />
          )
        }
      />
      <Route
        exact
        path="/admin/dash"
        render={(props) =>
          user && user !== undefined && user.role === "admin" ? (
            <AdminDashboard {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default AdminRoutes;
