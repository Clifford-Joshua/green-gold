import React, { useEffect } from "react";

import styled from "styled-components";
import { Form, BgContainer } from "./Login Folder";
import { toast } from "react-toastify";
const Login = () => {
  const Theme = localStorage.getItem("THEME");
  useEffect(() => {
    document.documentElement.className = Theme;
  }, [Theme]);

  useEffect(() => {
    toast(
      "click on remember me before you login else the next time you try logging in you will need to sign up afresh"
    );
  }, []);

  return (
    <Wrapper>
      <Form />
      <BgContainer />
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

export default Login;
