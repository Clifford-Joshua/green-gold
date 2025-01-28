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
  background-color: var(--clr-transparent-white);

  .general_holder {
    gap: 4rem;
    width: 94%;
    display: flex;
    flex-direction: column;
  }

  :is(.course_container, .course_info_container) {
    gap: 4rem;
    display: flex;
    flex-direction: column;
  }

  .course_container {
    gap: 2rem;
  }

  /* ============================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .general_holder {
      width: 90%;
      flex-direction: row;
    }

    .course_container {
      width: 60%;
    }

    .course_info_container {
      width: 35%;
    }
  }
`;

export default Container;
