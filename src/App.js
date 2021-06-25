import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import { getCurrentUser } from "./services/userService";
// import HomeVideo from "../src/components/video/HomeVideo.mp4";
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  // const vidStyle = {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   left: "50%",
  //   top: "50%",
  //   objectFit: "cover",
  //   transform: "translate(-50% ,-50%)",
  //   zIndex: "-100",
  // };
  return (
    <>
      {/* <div className="video">
        <video autoPlay loop muted playsInline style={vidStyle}>
          <source src={HomeVideo} type="video/mp4" />
        </video> */}
      <Header user={user} />
      <Switch>
        <Routes user={user} />
      </Switch>
      {/* </div> */}
    </>
  );
}

export default App;
