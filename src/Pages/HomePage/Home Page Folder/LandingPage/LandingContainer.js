import React from "react";
import Title from "./Title";
import BgImages from "./BgImages";
import styled from "styled-components";
const LandingContainer = () => {
  return (
    <Wrapper>
      <div className="holder">
        <Title />
        <BgImages />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile */

  display: flex;
  align-items: center;
  justify-content: center;

  .holder {
    width: 94%;
    height: 100vh;
  }

  /* ====================================================== */
  /* Ipad View */
  @media screen and (width>=764px) {
    padding-block: 1.5rem;
    .holder {
      height: max-content;
    }
  }

  /* ====================================================== */
  /* Desktop View */
  @media screen and (width>=1023px) {
    justify-content: flex-end;

    .holder {
      width: 98%;
      height: 100vh;
      display: flex;
      align-items: top;
      justify-content: center;
    }
  }
`;

export default LandingContainer;
