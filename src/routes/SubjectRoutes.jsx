import { Route, Redirect } from "react-router";
import AddSubject from "../components/subject/AddSubject";
import EditSubject from "../components/subject/EditSubject";
import Subjects from "../components/subject/Subjects";

const SubjectRoutes = ({ user }) => {
  return (
    <>
      <Route exact path="/subjects" render={() => <Subjects user={user} />} />
      <Route
        exact
        path="/subjects/add"
        render={(props) =>
          user && user.role === "admin" ? (
            <AddSubject {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
      <Route
        exact
        path="/subjects/update/:id"
        render={(props) =>
          user && user.role === "admin" ? (
            <EditSubject {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default SubjectRoutes;
