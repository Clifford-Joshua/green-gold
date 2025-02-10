import React from "react";
import styled from "styled-components";
import { GiNetworkBars } from "react-icons/gi";
const CourseTitle = () => {
  return (
    <Wrapper>
      <h4 className="title_intro">
        <GiNetworkBars />
        AVAILABLE COURSES
      </h4>

      <h2 className="title">In-demand Tech Skills</h2>

      <p className="sub_title">
        Welcome to Green Gold Academy, where education meets excellence! We are
        proud to offer a diverse range of courses designed to empower our
        students, nurture their talents, and prepare them for a bright future.
        At Green Gold Academy, we believe that education is the foundation of
        personal and professional success, which is why our courses are tailored
        to meet the evolving needs of our students in an ever-changing world.
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
    font-weight: 700;
    color: var(--clr-darkgreen);
  }

  .title {
    font-weight: 800;
    font-size: 1.8rem;
    text-transform: capitalize;
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

export default CourseTitle;
