import React from "react";
import CourseBg from "./Courses Folder/CourseBg";
import styled from "styled-components";
import CourseTitle from "./Courses Folder/CourseTitle";
import CourseContainer from "./Courses Folder/CourseContainer";
const CourseHolder = () => {
  return (
    <Wrapper className="CourseMainContainer">
      <div className="main_container">
        <CourseBg />

        <CourseTitle />

        <CourseContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-transparent-white);
`;

export default CourseHolder;
