import React from "react";
import Level from "./Level";
import styled from "styled-components";
import CourseContainer from "./CourseContainer";

const BsContainer = () => {
  return (
    <Wrapper>
      <h2 className="title">BSc. Software Engineering</h2>

      <p className="sub_title">BSc. Software Engineering</p>

      <p className="sub_title">Duration: 4 year(s)</p>

      <Level />

      <CourseContainer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================================= */
  /* Mobile View */
  gap: 0.9rem;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  flex-direction: column;
  color: var(--bg-black-color);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: var(--black-color);
  border: 2px solid var(--bg-black-color);

  .title {
    font-size: 1rem;
    font-weight: 800;
    width: max-content;
    padding-block: 0.8rem;
    text-transform: capitalize;
    border-bottom: 2px solid var(--bg-black-color);
  }

  .sub_title {
    font-size: 0.9rem;
  }

  /* ======================================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.2rem;
    }

    .sub_title {
      font-size: 1rem;
    }
  }

  @media screen and (width >=1023px) {
    padding: 2rem 2.5rem;
  }
`;

export default BsContainer;
