import React from "react";
import styled from "styled-components";
import { BgImage, AboutContainer } from "./About Us";

const About = () => {
  return (
    <Wrapper>
      <BgImage />
      <AboutContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--bg-black-color);
`;
export default About;
