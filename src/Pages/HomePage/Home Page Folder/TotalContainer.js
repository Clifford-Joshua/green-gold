import React from "react";
import styled from "styled-components";
import { BgImage } from "./TotalStudents";
const TotalContainer = () => {
  return (
    <Wrapper>
      <BgImage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =============================================== */
  /* Mobile View */
  padding-block: 5rem;
  background-color: var(--clr-transparent-white);
`;

export default TotalContainer;
