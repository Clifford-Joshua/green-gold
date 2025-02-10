import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Data } from "../../../../Utils/Data";
const CourseContainer = () => {
  const { CourseApi } = Data;

  const [isReadMore] = useState(false);

  const handleDetails = (profilePicture, text, CourseName) => {
    localStorage.setItem("CourseText", text);
    localStorage.setItem("CourseName", CourseName);
    localStorage.setItem("CourseImg", profilePicture);
  };

  return (
    <Wrapper>
      <div className="container_holder">
        {CourseApi.slice(0, 6).map(
          ({ courseIcon, courseImg, courseName, courseText }, index) => {
            return (
              <div className="course_container" key={index}>
                <div className="img_container">
                  <img
                    src={courseImg}
                    alt="course_img"
                    className="course_img"
                  />
                  <Link
                    to={`/course/${courseName}`}
                    className="course_icon"
                    onClick={() =>
                      handleDetails(courseImg, courseText, courseName)
                    }
                  >
                    <div className="icon_holder">{courseIcon}</div>
                  </Link>
                </div>
                <h2 className="course_title">{courseName}</h2>
                <p className="course_text">
                  {isReadMore
                    ? courseText
                    : `${courseText.substring(0, 30)}.........`}
                </p>
                <Link
                  to={`/course/${courseName}`}
                  className="readMore"
                  onClick={() =>
                    handleDetails(courseImg, courseText, courseName)
                  }
                >
                  read more
                  <FaArrowRight />
                </Link>
              </div>
            );
          }
        )}
      </div>
      <Link
        to={"/course"}
        className="btn btn-outline-warning btn-lg text-capitalize fw-bolder"
      >
        view more
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================ */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .container_holder {
    gap: 1rem;
    width: 94%;
    display: grid;
    cursor: pointer;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .course_container {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid var(--clr-gray-400);
  }

  .img_container {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .course_img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }

  .course_icon {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: var(--transitions);
    background-color: var(--clr-transparent-white);
  }

  .icon_holder {
    width: 70px;
    height: 70px;
    display: flex;
    font-size: 1.8rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: var(--transitions);
  }

  .icon_holder:hover {
    color: var(--clr-light-orange);
    background-color: var(--clr-lighter-green);
  }

  :is(.course_container):hover .course_icon {
    opacity: 1;
  }

  .course_title {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--black-color);
  }

  .course_text {
    font-size: 1rem;
    color: var(--black-color);
  }

  .readMore {
    gap: 1rem;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    margin-top: auto;
    align-items: center;
    text-transform: capitalize;
    transition: var(--transitions);
  }

  .readMore:hover {
    color: var(--clr-darkgreen);
  }

  /* ============================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    gap: 2.5rem;
    .course_title {
      font-size: 1.5rem;
    }

    :is(.course_text, .readMore) {
      font-size: 1.1rem;
    }
  }
`;
export default CourseContainer;
