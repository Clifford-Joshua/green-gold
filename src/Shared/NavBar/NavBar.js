import React from "react";
import styled from "styled-components";
import { Logo, NavLinks, SmallNavLinks, BarIcon } from "./Nav";
const NavBar = () => {
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
  height: 12vh;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

export default NavBar;
