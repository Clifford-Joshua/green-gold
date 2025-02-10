import React from "react";
import styled from "styled-components";
import { FaBookReader } from "react-icons/fa";
const TeacherTittle = () => {
  return (
    <Wrapper>
      <h4 className="title_intro">
        <FaBookReader />
        Our Teachers
      </h4>

      <h2 className="title">
        Meet With Our <span className="green"> Teachers</span>{" "}
      </h2>

      <p className="sub_title">
        At Green Gold Academy, we take great pride in introducing our dedicated
        and inspiring team of teachers, who form the cornerstone of our
        educational journey. Each member of our faculty is committed to
        nurturing young minds, guiding students to reach their full potential,
        and fostering a love for lifelong learning. With their diverse
        expertise, passion for teaching, and innovative approaches to education,
        our teachers create a dynamic and supportive environment where every
        student can thrive.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  align-items: center;
  padding-block: 3rem;
  flex-direction: column;
  color: var(--black-color);

  .title_intro {
    gap: 0.5rem;
    display: flex;
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--clr-darkgreen);
  }

  .title {
    font-weight: 900;
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  .green {
    padding-left: 0.4rem;
    color: var(--clr-darkgreen);
  }

  .sub_title {
    width: 94%;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.7rem;
  }

  /* ===================================================== */
  /* Ipad View */
  @media screen and (width >= 763px) {
    padding-block: 1.5rem;

    .title_intro {
      font-size: 1.5rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .sub_title {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;

export default TeacherTittle;
