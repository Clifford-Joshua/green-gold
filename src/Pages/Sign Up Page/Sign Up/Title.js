import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <h2 className="title">Start your application</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================== */
  /* Mobile View */
  .title {
    font-weight: 600;
    padding: 1.5rem 0;
    font-size: 1.5rem;
    padding-bottom: 0;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-darkgreen);
  }
  /* =================================== */

  /* ==================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-weight: 500;
      font-size: 1.8rem;
    }
  }
  /* =================================== */

  /* ==================================== */
  /* desktop View */
  @media screen and (width >= 1023px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;
export default Title;
