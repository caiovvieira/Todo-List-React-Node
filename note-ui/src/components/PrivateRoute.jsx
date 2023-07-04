import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(props) {
  
  const [auth, setAuth] = useState(true)

  return (
    auth ? <Outlet/> : <Navigate to="/" />
    
  );
}

export default PrivateRoute;
