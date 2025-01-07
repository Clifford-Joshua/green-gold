import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <h2 className="title">Login into your account</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================== */
  /* Mobile view */
  .title {
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--clr-lighter-green);
  }

  /* ================================================== */
  /* Ipad view */
  @media screen and (764px <= width <= 1024px) {
    .title {
      font-size: 1.7rem;
    }
  }

  /* ================================================== */
  /* Desktop view */
  @media screen and (width >= 1024px) {
    .title {
      font-size: 1.3rem;
    }
  }
`;

export default Title;
