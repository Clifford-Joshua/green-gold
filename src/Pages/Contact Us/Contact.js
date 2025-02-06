import React from "react";
import styled from "styled-components";
import { BgImage, Address, ContactContainer } from "./ContactUs";

const Contact = () => {
  return (
    <Wrapper>
      <BgImage />
      <Address />
      <ContactContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================== */
  /* Mobile View */
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-black-color);
`;

export default Contact;
