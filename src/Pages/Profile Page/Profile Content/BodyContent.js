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

  ::-webkit-scrollbar {
    display: none;
  }

  /* ======================================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    width: 100%;
  }

  /* ======================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 70%;
    gap: 2.5rem;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

export default BodyContent;
