import { Route } from "react-router-dom";
import Departments from "./components/department/Departments";
import AddDept from "./components/department/AddDept";
import Home from "./components/Home";
import EditDept from "./components/department/EditDept";
import Teachers from "./components/teacher/Teachers";
import AddTeacher from "./components/teacher/AddTeacher";
import EditTeacher from "./components/teacher/EditTeacher";
import Subjects from "./components/subject/Subjects";
import AddSubject from "./components/subject/AddSubject";
import EditSubject from "./components/subject/EditSubject";
import Students from "./components/student/Students";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import Login from "./components/Login";
import Logout from "./components/Logout";
import StudentDash from "./components/student/StudentDash";
import TeacherDash from "./components/teacher/TeacherDash";
import HodDash from "./components/hod/HodDash";
import AddClass from "./components/class/AddClass";
import ClassDash from "./components/class/ClassDash";
import TakeAttened from "./components/class/TakeAttened";
import EditClass from "./components/class/EditClass";
const Routes = ({ user }) => {
  return (
    <>
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/departments/add" component={AddDept} />
      <Route exact path="/departments/update/:id" component={EditDept} />

      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/teachers/add" component={AddTeacher} />
      <Route exact path="/teachers/update/:id" component={EditTeacher} />

      <Route exact path="/subjects" component={Subjects} />
      <Route exact path="/subjects/add" component={AddSubject} />
      <Route exact path="/subjects/update/:id" component={EditSubject} />

      <Route exact path="/students" component={Students} />
      <Route exact path="/students/add" component={AddStudent} />
      <Route exact path="/students/update/:id" component={EditStudent} />

      <Route exact path="/class/new" component={AddClass} />
      <Route exact path="/class/update/:id" component={EditClass} />
      <Route exact path="/classes/:id" component={ClassDash} />
      <Route exact path="/classes/:id/attened" component={TakeAttened} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />

      <Route
        exact
        path="/dash"
        render={() => {
          if (user && user !== undefined && user.role === "student") {
            return <StudentDash />;
          }
          if (user && user !== undefined && user.role === "teacher") {
            return <TeacherDash />;
          }
          if (user && user !== undefined && user.role === "hod") {
            return <HodDash />;
          }
        }}
      />

      <Route exact path="/" component={Home} />
    </>
  );
};

export default Routes;
