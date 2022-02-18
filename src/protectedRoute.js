import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  const token = localStorage.getItem("auth-token");

  return token ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default ProtectedRoute;
