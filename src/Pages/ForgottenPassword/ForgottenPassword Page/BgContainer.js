import React from "react";
import BgImage from "../../../Assets/undraw_warning_qn4r.svg";
import styled from "styled-components";
const BgContainer = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">Did You forget your password</h2>
        <button className="register-btn">register an account</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  display: none;

  /* =========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 50%;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    background: url(${BgImage}) center/cover, no-repeat;
    background-color: crimson;

    .container {
      bottom: 2%;
      width: 60%;
      gap: 1.5rem;
      display: flex;
      position: absolute;
      align-items: center;
      flex-direction: column;
    }

    .title {
      color: white;
      font-weight: 800;
      font-size: 2.3rem;
      text-align: center;
      text-transform: capitalize;
      text-shadow: 2px 2px 3px red, 3px 3px 1px black;
    }

    .register-btn {
      width: 60%;
      color: white;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.8rem;
      border-radius: 10px;
      padding: 0.4rem 0.6rem;
      text-transform: uppercase;
      box-shadow: var(--clr-form-box-shadow-gray);
      background: linear-gradient(to right, #097629 5%, #947b00);
    }
  }
`;

export default BgContainer;
