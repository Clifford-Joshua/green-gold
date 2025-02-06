import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";
import ContactProfile from "./ContactProfile";

const ContactContainer = () => {
  return (
    <Wrapper>
      <div className="holder">
        <ContactProfile />

        <div className="form_container">
          <ContactIntro />
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================== */
  /* Mobile View */
  display: flex;
  padding-block: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .holder {
    gap: 2rem;
    width: 94%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (width>=1023px) {
    .holder {
      flex-direction: row;
    }

    .form_container {
      width: 48%;
    }
  }
`;

export default ContactContainer;
