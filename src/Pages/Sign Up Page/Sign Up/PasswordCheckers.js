import React from "react";
import styled from "styled-components";

const PasswordCheckers = ({ CheckerName, CheckerIcon, checkPassWord }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className={`icon ${checkPassWord && "checked"}`}>
          {CheckerIcon}
        </div>
        <div className="name">{CheckerName}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================== */
  /* Mobile View */
  .container {
    gap: 0.4rem;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    color: var(--clr-darkgray);
    text-transform: capitalize;
  }

  .checked {
    color: var(--clr-darkgreen);
  }

  .name {
    color: var(--black-color);
  }
  /* =================================== */

  /* =================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .container {
      font-size: 0.7rem;
    }
  }
`;
export default PasswordCheckers;
