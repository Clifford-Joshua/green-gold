import React from "react";
import styled from "styled-components";
// import test from "../../../Assets/maths-1.png";
import { Link } from "react-router-dom";
const CourseItem = () => {
  return (
    <Wrapper>
      <div className="Course">
        {/* <div className="course_container">
        <img src={test} alt="course_img" className="course_img" />
        <div className="course_details">
          <h2 className="course_title">Maths</h2>
          <p className="detail">Credits earned: 0 / 2</p>
          <p className="detail">Course Starts: 8 January 2024</p>
          <p className="detail">Duration: 6 Month(s)</p>
          <p className="detail">Site: Miva Open University</p>
          <p className="detail">Study Mode: Full Time(Distance )</p>
        </div>

        <Link className="class_btn">go to class</Link>
      </div> */}

        <div>
          <h2 className="text-danger fw-bolder fs-4 text-capitalize">
            you haven't added any course yet to your profile page
          </h2>

          <Link
            to={"/course"}
            className="btn btn-outline-success fs-5 fw-bold mt-4"
          >
            Visit our course page
          </Link>
        </div>
      </div>

      <div className="Event">
        <h2 className="Event_title">My Event</h2>

        <div className="Event_container">
          {/* <div className="course_container">
        <img src={test} alt="course_img" className="course_img" />
        <div className="course_details">
          <h2 className="course_title">Maths</h2>
          <p className="detail">Credits earned: 0 / 2</p>
          <p className="detail">Course Starts: 8 January 2024</p>
          <p className="detail">Duration: 6 Month(s)</p>
          <p className="detail">Site: Miva Open University</p>
          <p className="detail">Study Mode: Full Time(Distance )</p>
        </div>

        <Link className="class_btn">go to class</Link>
      </div> */}

          <div>
            <h2 className="text-danger fw-bolder fs-4 text-capitalize">
              you haven't Joined any Events yet to your profile page
            </h2>

            <Link
              to={"/course"}
              className="btn btn-outline-success fs-5 fw-bold mt-4"
            >
              Visit our course/Event page
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */

  :is(.course_container, .Event_container) {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .course_container {
    gap: 1rem;
    display: flex;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .course_img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-radius: 15px;
  }

  .course_title {
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }

  .Event {
    padding-block: 3rem;
  }

  .Event_title {
    font-size: 1.45rem;
    padding-block: 1rem;
  }

  .detail {
    font-size: 0.9rem;
  }

  .class_btn {
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    border-radius: 10px;
    text-transform: capitalize;
    transition: var(--transitions);
    background-color: var(--clr-darkgreen);
  }

  .class_btn:hover {
    color: var(--black-color);
    background-color: var(--bg-black-color);
  }
`;

export default CourseItem;
