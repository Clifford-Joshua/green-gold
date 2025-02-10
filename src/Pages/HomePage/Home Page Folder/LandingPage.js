import React from "react";
import LandingContainer from "./LandingPage/LandingContainer";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Wrapper>
      <LandingContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
`;

export default LandingPage;
