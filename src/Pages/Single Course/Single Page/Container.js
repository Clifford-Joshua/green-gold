import React from "react";
import CourseInfo from "./CourseInfo";
import ProfileImage from "./ProfileImage";
import CourseFeature from "./CourseFeature";
import CourseArticle from "./CourseArticle";
import styled from "styled-components";
const Container = () => {
  return (
    <Wrapper>
      <div className="general_holder">
        <div className="course_container">
          <ProfileImage />
          <CourseArticle />
        </div>
        <div className="course_info_container">
          <CourseInfo />
          <CourseFeature />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================= */
  /* Mobile View */
  display: flex;
  padding-block: 4rem;
  align-items: center;
  justify-content: center;
  border: 2px solid green;

  .general_holder {
    gap: 1rem;
    width: 94%;
    display: flex;
    border: 2px solid red;
    flex-direction: column;
  }

  :is(.course_container, .course_info_container) {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  /* ============================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .general_holder {
      width: 85%;
      flex-direction: row;
    }

    .course_container {
      width: 55%;
    }

    .course_info_container {
      width: 40%;
    }
  }
`;

export default Container;
