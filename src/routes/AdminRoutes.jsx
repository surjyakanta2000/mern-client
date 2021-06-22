import { Route } from "react-router-dom";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";

const AdminRoutes = () => {
  return (
    <>
      <Route exact path="/admin/login" component={AdminLogin} />
      <Route exact path="/admin/dash" component={AdminDashboard} />
    </>
  );
};

export default AdminRoutes;
