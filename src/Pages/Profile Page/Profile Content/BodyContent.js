import React from "react";
import Title from "./Title";
import ProfileNav from "./ProfileNav";
import styled from "styled-components";
import BsContainer from "./BsContainer";
const BodyContent = () => {
  return (
    <Wrapper>
      <ProfileNav />

      <Title />

      <BsContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ======================================================= */
  /* Mobile View */
  gap: 1rem;
  margin: 0;
  width: 96%;
  display: flex;
  flex-direction: column;

  /* ======================================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    width: 100%;
  }

  /* ======================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 67%;
    gap: 2.5rem;
  }
`;

export default BodyContent;
