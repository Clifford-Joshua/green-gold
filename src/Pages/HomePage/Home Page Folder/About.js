import React from "react";
import AboutContainer from "./About Us/AboutContainer";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <div className="ABOUT_CONTAINER">
        <AboutContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================== */
  /* Mobile View */
  .ABOUT_CONTAINER {
    display: flex;
    justify-content: center;
  }
`;

export default About;
