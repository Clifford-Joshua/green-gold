import React from "react";
import styled from "styled-components";
import logo from "../../../Assets/Login-Logo.png";
const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="logo" />{" "}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ========================================================= */
  /* Mobile View */
  .logo {
    width: 300px;
    height: 180px;
    object-fit: contain;
  }

  /* ========================================================= */
  /* Ipad View */
  @media screen and (764px <= width <= 1023px) {
    .logo {
      height: 200px;
    }
  }

  /* ========================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .logo {
      height: 150px;
    }
  }
`;

export default Logo;
