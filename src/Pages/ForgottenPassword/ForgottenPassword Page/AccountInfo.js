import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AccountInfo = () => {
  return (
    <Wrapper>
      <p className="account">seems like you forgot your account password?</p>
      <Link to={"/signup"} className="register">
        Register a new account
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================= */
  /* Mobile View */

  gap: 0.3rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .account {
    color: red;

    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .register {
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    color: var(--clr-lighter-green);
  }

  .register:hover {
    color: blue;
  }

  /* ================================================= */
  /* Ipad View */
  @media screen and (764px <= width <= 1023px) {
    .account,
    .register {
      font-size: 1.35rem;
    }
  }

  /* ================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    gap: 0.1rem;

    .account,
    .register {
      font-size: 1rem;
    }
  }
`;

export default AccountInfo;
