import React from "react";
import styled from "styled-components";
import { IoMail } from "react-icons/io5";

const AboutDetails = () => {
  return (
    <Wrapper>
      <div className="about_container">
        <h2 className="title">About us</h2>
        <p className="text">
          Welcome to Green Gold Academy, a place where education meets
          excellence! We are committed to nurturing young minds by providing a
          high-quality, well-rounded education that empowers students to reach
          their full potential. At Green Gold Academy, we believe that learning
          goes beyond textbooks—it’s about inspiring curiosity, developing
          strong values, and preparing students for a bright future. With a team
          of dedicated educators, modern facilities, and a dynamic curriculum,
          we create an environment where students can grow academically,
          socially, and emotionally. Our goal is to shape future leaders,
          innovators, and responsible citizens who will make a positive impact
          in the world. Join us on this journey of learning, discovery, and
          success at Green Gold Academy—where every student’s future is golden!
        </p>

        <div className="contact_container">
          <div className="phone">
            <h3 className="call">call now</h3>
            <h3 className="call">+234 816 548 7439</h3>
          </div>

          <a href="mailto:cliffordgb45@gmail.com" className="mail">
            <IoMail />
            Mail Us
          </a>
        </div>

        <h2 className="title">Our services</h2>
        <p className="text">
          At Green Gold Academy, we are dedicated to providing a comprehensive
          and high-quality educational experience that nurtures the
          intellectual, social, and emotional growth of every student. Our wide
          range of services is designed to support academic excellence, personal
          development, and future success. At Green Gold Academy, we strive to
          create a learning environment where every student feels valued,
          supported, and inspired to achieve their dreams.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .about_container {
    width: 94%;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--clr-light-orange);
  }

  .text {
    font-size: 0.9rem;
    color: var(--clr-charcoal-color);
  }

  .call {
    color: var(--clr-lighter-green);
  }

  .contact_container {
    gap: 2rem;
    display: flex;
    font-size: 1rem;
    align-items: end;
    font-weight: 600;
    padding-block: 1rem;
    border-radius: 15px;
    text-transform: capitalize;
    justify-content: space-evenly;
    background-color: var(--black-color);
    border: 2px solid var(--clr-lighter-green);
  }

  .mail {
    gap: 0.6rem;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
  }

  /* =========================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.8rem;
    }
    .contact_container {
      width: 50%;
    }

    .text {
      font-size: 1.1rem;
    }
  }

  /* =========================================================== */
  /* Ipad View */
  @media screen and (width >= 1023px) {
    .contact_container {
      width: 35%;
    }
  }
`;

export default AboutDetails;
