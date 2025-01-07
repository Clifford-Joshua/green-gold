import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import FormContainer from "./FormContainer";
import styled from "styled-components";
const Form = () => {
  return (
    <Wrapper>
      <Logo />
      <Title />
      <FormContainer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  gap: 1.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1.8rem;
  flex-direction: column;

  /* =========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    gap: 1rem;
    width: 50%;
  }
`;

export default Form;
