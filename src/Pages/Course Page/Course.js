import React from "react";
import styled from "styled-components";
import {
  Offer,
  EventHolder,
  CourseHolder,
  TeachersHolder,
  TotalContainer,
} from "./Courses";
const Course = () => {
  return (
    <Wrapper>
      <div className="main_container">
        <CourseHolder />

        <TotalContainer />

        <EventHolder />

        <Offer />

        <TeachersHolder />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================ */
  /* Mobile View */
  background: var(--general-bg);
`;

export default Course;
