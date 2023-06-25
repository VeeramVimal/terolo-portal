import { lazy } from "react";
//** components imported */
import CommingSoon from "../../pages/comming-soon";
import Login from "../../pages/login-register/Login";
import ForgotPassword from "../../pages/login-register/ForgotPassword";
import Signup from "../../pages/login-register/Signup";
import EmailVerification from "../../pages/login-register/EmailVerification";
import Home from "../../pages/home";

const protectedRoutes = [
  {
    path: "",
    component: "",
    exact: true,
  },
];

const publicRoutes = [
  {
    path: "login",
    component: <Login />,
    exact: true,
  },
  {
    path: "forgot-password",
    component: <ForgotPassword />,
    exact: true,
  },
  {
    path: "sign-up",
    component: <Signup />,
    exact: true,
  },
  {
    path: "signup/validate-email",
    component: <EmailVerification />,
    exact: true,
  },
  {
    path: "home",
    component: <Home />,
    exact: true,
  },
];

export { protectedRoutes, publicRoutes };
