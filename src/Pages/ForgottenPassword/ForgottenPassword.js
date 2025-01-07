import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, BgContainer } from "./ForgottenPassword Page";

const ForgottenPassword = () => {
  const Theme = localStorage.getItem("THEME");
  useEffect(() => {
    document.documentElement.className = Theme;
  }, [Theme]);

  return (
    <Wrapper>
      <BgContainer />
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  display: flex;
  min-height: 100vh;
  background: var(--signup-bg);
`;

export default ForgottenPassword;
