import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import FormContainer from "./FormContainer";
import styled from "styled-components";
const Form = () => {
  return (
    <Wrapper>
      <Title />
      <SubTitle />
      <h3 className="required_text">* required</h3>
      <FormContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================= */
  /* Mobile View */
  gap: 0.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .required_text {
    width: 100%;
    font-size: 1rem;
    text-align: left;
    font-weight: bolder;
    color: var(--black-color);
    text-transform: capitalize;
  }

  /* =================================== */

  /* ================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 55%;
    .required_text {
      width: 75%;
    }
  }
`;

export default Form;
