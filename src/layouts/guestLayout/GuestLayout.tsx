import "./GuestLayout.css";
import { Navigate, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/Store";

function GuestLayout() {
  const { jwt } = useSelector((S: RootState) => S.user);

  if (jwt) return <Navigate to={"/menu"} />;

  return (
    <div className="guest-page">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default GuestLayout;
