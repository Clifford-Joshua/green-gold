import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "../../../Utils/Data";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
const CourseInfo = () => {
  const { CourseInfo } = Data;

  const [Join, setJoin] = useState(false);
  return (
    <Wrapper>
      <h2 className="title">
        <span className="dot">Course </span>
        Info
      </h2>

      <div className="info_container">
        {CourseInfo.map(({ img, name, title, icon }) => {
          console.log(icon);
          return (
            <div className="item_holder">
              {img && <img src={img} alt="teacher_image" className="image" />}

              {icon && <div className="icon_holder">{icon}</div>}

              <div className="details">
                <h2 className="name">{title}</h2>
                <p className="profession">{name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="enroll_now"
        onClick={() => {
          setJoin(!Join);
          if (!Join) {
            toast.success("Course Added");
          } else {
            toast.error("Course Removed");
          }
        }}
      >
        {Join ? "remove course" : "add course"} <FaArrowRight />{" "}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */
  padding: 1.5rem;
  border-radius: 15px;
  color: var(--bg-black-color);
  background-color: var(--black-color);

  .title {
    gap: 0.8rem;
    display: flex;
    font-weight: 600;
    font-size: 1.4rem;
    padding-block: 1rem;
    text-transform: capitalize;
  }

  .dot {
    border-bottom: 4px dotted var(--clr-light-orange);
  }

  .info_container {
    gap: 1rem;
    display: flex;
    padding-block: 1.5rem;
    flex-direction: column;
  }

  .item_holder {
    gap: 0.5rem;
    display: flex;
    align-items: end;
  }

  :is(.image, .icon_holder) {
    width: 60px;
    height: 60px;
    display: flex;
    font-size: 1.6rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: var(--clr-light-orange);
    border: 2px solid var(--clr-light-orange);
  }

  .image {
    border: none;
    object-fit: cover;
  }

  .name {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .profession {
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    color: var(--clr-gray-400);
  }

  .enroll_now {
    gap: 0.6rem;
    width: 100%;
    color: white;
    padding: 1rem;
    display: flex;
    font-weight: 700;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    text-transform: capitalize;
    border-bottom-left-radius: 0;
    transition: var(--transitions);
    background-color: var(--clr-light-orange);
  }

  .enroll_now:hover {
    color: black;
    background-color: var(--clr-darkgreen);
  }
`;

export default CourseInfo;
