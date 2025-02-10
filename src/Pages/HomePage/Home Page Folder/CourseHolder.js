import React from "react";
import styled from "styled-components";
import CourseTitle from "./Courses Folder/CourseTitle";
import CourseContainer from "./Courses Folder/CourseContainer";
const CourseHolder = () => {
  return (
    <Wrapper className="CourseMainContainer">
      <div className="main_container">
        <CourseTitle />

        <CourseContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  padding-bottom: 2rem;
  background-color: var(--clr-transparent-white);
`;

export default CourseHolder;
