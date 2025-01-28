import React from "react";
import styled from "styled-components";
import CourseItem from "./CourseItem";
import CourseTitle from "./CourseTitle";
const CourseContainer = () => {
  return (
    <Wrapper>
      <CourseTitle />
      <CourseItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export default CourseContainer;
