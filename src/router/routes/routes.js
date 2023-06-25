import { lazy } from "react";
//** components imported */
import Login from "../../pages/login-register/Login";
import ForgotPassword from "../../pages/login-register/ForgotPassword";
import Signup from "../../pages/login-register/Signup";
import EmailVerification from "../../pages/login-register/EmailVerification";
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboard";
import Dashboard2 from "../../pages/dashboard 2";

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
  {
    path: "Dashboard",
    component: <Dashboard />,
    exact: true,
  },
  {
    path: "Performance",
    component: <Dashboard2 />,
    exact: true,
  },
];

export { protectedRoutes, publicRoutes };
