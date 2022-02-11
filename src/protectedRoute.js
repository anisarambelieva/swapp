import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ props, children }) => {
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
