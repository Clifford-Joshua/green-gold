import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, ImageBg } from "./Sign Up";

const SignUp = () => {
  const Theme = localStorage.getItem("THEME");
  useEffect(() => {
    document.documentElement.className = Theme;
  }, [Theme]);

  return (
    <Wrapper>
      <ImageBg />
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile View and Ipad View */
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: var(--signup-bg);
  /* ======================================= */

  /* ======================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    padding: 0;
    display: flex;
  }
`;

export default SignUp;
