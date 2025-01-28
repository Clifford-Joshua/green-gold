import React from "react";
import styled from "styled-components";
const CourseTitle = () => {
  return (
    <Wrapper>
      <h2 className="course_title">My Courses</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  .course_title {
    font-size: 1.45rem;
    padding-block: 1rem;
  }
`;

export default CourseTitle;
