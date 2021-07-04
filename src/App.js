import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";

import { getCurrentUser } from "./services/userService";
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Routes user={user} />
      </Switch>
    </>
  );
}

export default App;
