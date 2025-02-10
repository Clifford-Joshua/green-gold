import React from "react";
import styled from "styled-components";
import AboutImages from "./AboutImages";
import AboutDetails from "./AboutDetails";
const AboutContainer = () => {
  return (
    <Wrapper>
      <AboutImages />
      <AboutDetails />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================== */
  /* Mobile View */
  gap: 2rem;
  width: 94%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--clr-transparent-white);

  /* ============================================== */
  /* Desktop View */
  @media screen and (width >=1023px) {
    width: 96%;
  }
`;

export default AboutContainer;
