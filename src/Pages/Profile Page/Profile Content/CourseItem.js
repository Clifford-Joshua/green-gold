import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const CourseItem = () => {
  const [courses, setCourses] = useState(() => {
    return JSON.parse(localStorage.getItem("CourseApi")) || [];
  });

  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("EventApi")) || [];
  });

  const handleCourseDelete = (name) => {
    const updatedCourses = courses.filter((course) => course.name !== name);

    localStorage.setItem("CourseApi", JSON.stringify(updatedCourses));
    setCourses(updatedCourses);
    toast.error("Course Removed");
  };

  const handleEventDelete = (name) => {
    const updatedCourses = events.filter((course) => course.name !== name);

    localStorage.setItem("EventApi", JSON.stringify(updatedCourses));
    setEvents(updatedCourses);
    toast.error("Event Removed");
  };

  return (
    <Wrapper>
      <div className="Course">
        {courses.length > 0 ? (
          courses.map(({ img, joined, name }, index) => {
            return (
              <div className="course_container" key={index}>
                <img src={img} alt="course_img" className="course_img" />
                <div className="course_details">
                  <h2 className="course_title">{name}</h2>
                  <p className="detail">Credits earned: 0 / 2</p>
                  <p className="detail">Course Starts: 8 January 2024</p>
                  <p className="detail">Duration: 6 Month(s)</p>
                  <p className="detail">Site: Miva Open University</p>
                  <p className="detail">Study Mode: Full Time(Distance )</p>
                </div>

                <Link
                  className="class_btn"
                  onMouseEnter={(e) => {
                    e.target.textContent = "Remove Course";
                  }}
                  onMouseLeave={(e) => {
                    e.target.textContent = joined;
                  }}
                  onClick={() => handleCourseDelete(name)}
                >
                  {joined}
                </Link>
              </div>
            );
          })
        ) : (
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
        )}
      </div>

      <div className="Event">
        <h2 className="Event_title">My Event</h2>

        <div className="Event_container">
          {events.length > 0 ? (
            events.map(({ img, joined, name }, index) => {
              return (
                <div className="course_container" key={index}>
                  <img src={img} alt="course_img" className="course_img" />
                  <div className="course_details">
                    <h2 className="course_title">{name}</h2>
                    <p className="detail">Credits earned: 0 / 2</p>
                    <p className="detail">Course Starts: 8 January 2024</p>
                    <p className="detail">Duration: 6 Month(s)</p>
                    <p className="detail">Site: Miva Open University</p>
                    <p className="detail">Study Mode: Full Time(Distance )</p>
                  </div>

                  <Link
                    className="class_btn"
                    onMouseEnter={(e) => {
                      e.target.textContent = "Delete Event";
                    }}
                    onMouseLeave={(e) => {
                      e.target.textContent = joined;
                    }}
                    onClick={() => handleEventDelete(name)}
                  >
                    {joined}
                  </Link>
                </div>
              );
            })
          ) : (
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
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */

  :is(.Course, .Event_container) {
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
