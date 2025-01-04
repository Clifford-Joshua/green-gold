import React from "react";
import styled from "styled-components";
const SubTitle = () => {
  return (
    <Wrapper>
      <p className="sub_title">
        Create an account to join the Green Gold International Schools Community
        and unlock your potential.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================== */
  /* Mobile View */
  .sub_title {
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    color: var(--black-color);
  }
  /* =================================== */

  /* =================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .sub_title {
      font-size: 1.2rem;
    }
  }
  /* =================================== */

  /* =================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 70%;
    .sub_title {
      font-size: 1rem;
    }
  }
`;
export default SubTitle;
