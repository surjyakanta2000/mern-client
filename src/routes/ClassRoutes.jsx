import { Route } from "react-router-dom";
import AddClass from "../components/class/AddClass";
import ClassDash from "../components/class/ClassDash";
import EditClass from "../components/class/EditClass";
import TakeAttened from "../components/class/TakeAttened";

const ClassRoutes = () => {
  return (
    <>
      <Route exact path="/class/new" component={AddClass} />
      <Route exact path="/class/update/:id" component={EditClass} />
      <Route exact path="/classes/:id" component={ClassDash} />
      <Route exact path="/classes/:id/attened" component={TakeAttened} />
    </>
  );
};

export default ClassRoutes;
