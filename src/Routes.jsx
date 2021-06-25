import { Route } from "react-router-dom";
import Home from "./components/Home";
import AdminRoutes from "./routes/AdminRoutes";
import DeptRoutes from "./routes/DeptRoutes";
import TechRoutes from "./routes/TechRoutes";
import SubjectRoutes from "./routes/SubjectRoutes";
import StudentRoutes from "./routes/studentRoutes";
import ClassRoutes from "./routes/ClassRoutes";
import UserRoutes from "./routes/UserRoutes";
import NotFound from "./components/NotFound";

const Routes = ({ user }) => {
  return (
    <>
      <AdminRoutes />
      <DeptRoutes user={user} />
      <TechRoutes user={user} />
      <SubjectRoutes user={user} />
      <StudentRoutes user={user} />
      <ClassRoutes user={user} />
      <UserRoutes user={user} />

      <Route exact path="/" render={() => <Home user={user} />} />
      <Route exact path="/notfound" component={NotFound} />
    </>
  );
};

export default Routes;
