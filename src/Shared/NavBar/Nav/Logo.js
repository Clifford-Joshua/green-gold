import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../../Assets/GG-Logo.png";
import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={NavLogo} alt="Logo" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================== */
  /* Mobile View */
  cursor: pointer;
  img {
    width: 150px;
    height: 70px;
    display: block;
    object-fit: contain;
  }
  /* ======================================= */

  /* ===================================== */
  /* Ipad View */
  @media screen and (width >= 754px) {
    img {
      width: 200px;
    }
  }
  /* ======================================= */

  /* ===================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    img {
      width: 160px;
      height: 50px;
    }
  }
`;

export default Logo;
