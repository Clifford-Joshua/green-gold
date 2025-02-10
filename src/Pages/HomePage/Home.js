import React from "react";
import styled from "styled-components";
import {
  LandingPage,
  PageIntro,
  About,
  TotalContainer,
} from "./Home Page Folder";

const Home = () => {
  return (
    <Wrapper>
      <div className="general_container">
        <LandingPage />
        <PageIntro />
        <About />
        <TotalContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */

  background: var(--general-bg);

  .general_container {
    background-color: var(--clr-transparent-white);
  }
`;

export default Home;
