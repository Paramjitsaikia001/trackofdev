import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/user.context";
import { ROUTES } from "../constants/routes";

export default function ProtectedRoute({ children }) {
  const { isAuthanticate,loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthanticate) return <Navigate to={ROUTES.LANDINGPAGE} replace />;
  return children;
}