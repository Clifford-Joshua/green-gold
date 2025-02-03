import React from "react";
import Vision from "./Vision";
import styled from "styled-components";
import AboutIntro from "./AboutIntro";
import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";
import ExclusiveTeam from "./ExclusiveTeam";
import StudentLearning from "./StudentLearning";
const AboutContainer = () => {
  return (
    <Wrapper>
      <AboutProfile />
      <AboutDetails />
      <AboutIntro />
      <StudentLearning />
      <Vision />
      <ExclusiveTeam />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export default AboutContainer;
