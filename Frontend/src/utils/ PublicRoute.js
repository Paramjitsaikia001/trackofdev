import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/user.context";
import { ROUTES } from "../constants/routes";

export default function PublicRoute({ children }) {
  const { isAuthanticate } = useContext(UserContext);

  if (isAuthanticate) return <Navigate to={ROUTES.HOME} replace />;
  return children;
}