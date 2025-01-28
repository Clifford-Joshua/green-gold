import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { Logo, NavLinks, SmallNavLinks, BarIcon } from "./Nav";
import { isLocalStorageUserLogin } from "../Features/UserSlice";
const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLocalStorageUserLogin());
  }, [dispatch]);
  return (
    <Wrapper>
      <Logo />
      <NavLinks />
      <SmallNavLinks />
      <BarIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================== */
  /* Mobile View */
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  background: var(--bg-black-color);
`;

export default NavBar;
