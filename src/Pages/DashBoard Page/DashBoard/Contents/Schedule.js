import React from "react";
import styled from "styled-components";
import { SiHtml5 } from "react-icons/si";
import { FaPencil } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
const Schedule = () => {
  return (
    <Wrapper>
      <div className="assignment_container">
        <h2 className="title">Schedule</h2>

        <div className="assignment_details">
          <div className="assignment">
            <h2 className="sub_title">
              <SiHtml5 className="icon" />
            </h2>

            <h2 className="num">HTML and CSS</h2>

            <h4 className="task"> 7:30am - 9:00am </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">
              <FaPencil className="icon" />
            </h2>

            <h2 className="num">ui ux design</h2>

            <h4 className="task">9:00am - 10:00am</h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">
              <FaReact className="icon" />
            </h2>

            <h2 className="num">react</h2>

            <h4 className="task">10:00am - 11:30am </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">
              <FaChartLine className="icon" />
            </h2>

            <h2 className="num">Digital Marketing</h2>

            <h4 className="task">11:30am - 12:30pm </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">
              <FaPython className="icon" />
            </h2>

            <h2 className="num">python</h2>

            <h4 className="task">1:00pm - 3:00pm </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  color: var(--black-color);

  .assignment_container {
    gap: 1rem;
    display: flex;
    border-radius: 15px;
    padding: 1rem 0.7rem;
    flex-direction: column;
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .title {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: capitalize;
    color: var(--clr-light-orange);
  }

  .assignment_details {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .assignment {
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 1rem 0.5rem;
    text-transform: capitalize;
    transition: var(--transitions);
    justify-content: space-between;
    border: 2px solid var(--clr-darkgray);
    background-color: var(--bg-black-color);
  }

  .sub_title {
    width: 45px;
    height: 45px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    background-color: blue;
    justify-content: center;
  }

  .num {
    color: blue;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .task {
    font-weight: 600;
    font-size: 0.7rem;
    color: var(--clr-charcoal-color);
  }

  /* =========================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.6rem;
    }

    .sub_title {
      width: 55px;
      height: 55px;
    }

    .num {
      font-size: 1.15rem;
    }

    .task {
      font-size: 1rem;
    }
  }
`;

export default Schedule;
