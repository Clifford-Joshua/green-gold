import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <p className="title">my academic</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================= */
  /* Mobile View */
  .title {
    font-weight: 550;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    color: var(--black-color);
    text-transform: capitalize;
  }

  /* ============================================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.7rem;
    }
  }
`;

export default Title;
