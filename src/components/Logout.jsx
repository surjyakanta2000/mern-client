import { userLogout } from "../services/userService";

const Logout = () => {
  userLogout();
  window.location = "/";
};

export default Logout;
