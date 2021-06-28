import { Route, Redirect } from "react-router-dom";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import Notice from "../components/admin/Notice";
import AddNotice from "../components/admin/AddNotice";

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
        render={(props) => <AdminDashboard {...props} />}
      />

      <Route
        exact
        path="/admin/dash/notice"
        render={(props) => <Notice {...props} />}
      />
      <Route
        exact
        path="/admin/dash/notice/add"
        render={(props) => <AddNotice {...props} />}
      />
    </>
  );
};

export default AdminRoutes;
