import React from "react";
import styled from "styled-components";
import { BgImage, Container } from "./Single Page";
const SingleEvent = () => {
  return (
    <Wrapper>
      <BgImage />
      <Container />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================ */
  /* Mobile View */
  background: var(--general-bg);
`;

export default SingleEvent;
