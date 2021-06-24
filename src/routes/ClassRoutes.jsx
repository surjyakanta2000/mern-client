import { Route } from "react-router-dom";
import AddClass from "../components/class/AddClass";
import ClassDash from "../components/class/ClassDash";
import EditClass from "../components/class/EditClass";
import TakeAttened from "../components/class/TakeAttened";
import AddAssignment from "../components/class/AddAssignment";
import AllAssignents from "../components/class/AllAssignment";
import StudentAssign from "../components/class/StudentAssign";
import Assignment from "../components/class/Assignment";
import AllResponses from "../components/class/AllResponses";

const ClassRoutes = ({ user }) => {
  return (
    <>
      <Route exact path="/class/new" component={AddClass} />
      <Route exact path="/class/update/:id" component={EditClass} />
      <Route exact path="/classes/:id" component={ClassDash} />
      <Route exact path="/classes/:id/attened" component={TakeAttened} />

      <Route
        exact
        path="/classes/:id/assignment"
        render={(props) => <Assignment {...props} />}
      />

      <Route
        exact
        path="/classes/:id/assignment/add"
        component={AddAssignment}
      />
      <Route
        exact
        path="/classes/:id/assignment/all"
        component={AllAssignents}
      />
      <Route
        exact
        path="/classes/:id/assignment/response"
        render={(props) => <StudentAssign user={user} {...props} />}
      />

      <Route exact path="/assignment/:id/responses" component={AllResponses} />
    </>
  );
};

export default ClassRoutes;
