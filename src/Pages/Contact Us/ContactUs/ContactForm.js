import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvoygdg");
  const navigate = useNavigate();

  if (state.succeeded) {
    navigate("/form-submitted");
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <div className="userDetails">
          <input
            id="fullname"
            type="text"
            name="fullname"
            className="input"
            placeholder="Your Full Name"
          />

          <input
            id="email"
            type="email"
            name="email"
            className="input"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <textarea
          id="message"
          name="message"
          className="textarea"
          placeholder="Write Us A Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="submit_btn"
        >
          Submit
          <FaPaperPlane />
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* ======================================================= */
  /* Mobile View */
  padding-block: 1.5rem;

  .form {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .userDetails {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .input {
    height: 55px;
    padding: 0 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
    color: var(--clr-darkgray);
  }

  .textarea {
    height: 100px;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 10px;
  }

  :is(.input, .textarea):focus {
    color: var(--black-color);
  }

  .submit_btn {
    gap: 0.6rem;
    padding: 1rem;
    display: flex;
    font-weight: 700;
    font-size: 1.2rem;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    color: var(--bg-black-color);
    transition: var(--transitions);
    background-color: var(--clr-light-orange);
  }

  .submit_btn:hover {
    background-color: var(--clr-lighter-green);
  }

  @media screen and (width>= 764px) {
    :is(.input, .textarea, .submit_btn) {
      font-size: 1.2rem;
    }
  }
`;

export default ContactForm;
