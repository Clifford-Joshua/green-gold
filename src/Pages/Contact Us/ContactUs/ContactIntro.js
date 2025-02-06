import React from "react";
import styled from "styled-components";
const ContactIntro = () => {
  return (
    <Wrapper>
      <div className="intro_container">
        <h2 className="title">Get In Touch</h2>
        <p className="sub_text">
          We’d love to hear from you! Whether you have questions, need more
          information about our programs, or want to schedule a visit, our team
          is here to assist you.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  .intro_container {
    gap: 0.6rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
    color: var(--black-color);
  }

  .sub_text {
    font-size: 0.9rem;
    color: var(--clr-charcoal-color);
  }

  /* =========================================================== */
  /* Ipad View View */
  @media screen and (width >= 1023px) {
    .title {
      font-size: 2.8rem;
    }

    .sub_text {
      font-size: 1.1rem;
    }
  }
`;

export default ContactIntro;
