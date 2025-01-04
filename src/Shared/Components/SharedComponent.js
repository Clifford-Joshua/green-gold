import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
const SharedComponent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedComponent;
