import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Remember = () => {
  const [isRemember, setIsRemember] = useState(false);
  const { isUser } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className="container">
        <div
          className="remember_container"
          onClick={() => {
            setIsRemember(!isRemember);
            localStorage.setItem("isUser", isUser);
          }}
        >
          <div className="icon_container">
            {isRemember ? (
              <FaCircleCheck className="blue" />
            ) : (
              <FaRegCircleCheck />
            )}
          </div>
          <h2 className="remember_text">remember me</h2>
        </div>
        <Link to={"/forgotten-password"} className="forgotten_password">
          forgot password ?
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  .container {
    width: 95%;
    padding: 0;
    gap: 0.8rem;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .icon_container {
    font-size: 1rem;
  }

  .blue {
    color: var(--clr-darkgreen);
  }

  .remember_container {
    gap: 0.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
  }

  .remember_text {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--black-color);
    text-transform: capitalize;
  }

  .forgotten_password {
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: capitalize;
    color: var(--clr-lighter-green);
  }

  /* =================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .container {
      width: 70%;
      height: 70px;
      justify-content: space-between;
    }

    .remember_text,
    .forgotten_password {
      font-size: 1.3rem;
    }
  }

  /* =================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .container {
      width: 85%;
      height: 40px;
    }

    .remember_text,
    .forgotten_password {
      font-size: 1rem;
    }
  }
`;

export default Remember;
