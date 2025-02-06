import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PiGearSixBold } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserCheck, FaBook } from "react-icons/fa";

import {
  checkAssignment,
  checkAttendance,
  checkDashboard,
  checkSetting,
  checkSyllabus,
} from "../../../../Shared/Features/UserSlice";

const DesktopSidebar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="link_container">
        <Link
          className="links"
          onClick={() => {
            dispatch(checkDashboard());
          }}
        >
          <p className="icon">
            <FaGraduationCap />
          </p>
          <h2> Dashboard</h2>
        </Link>

        <Link
          className="links"
          onClick={() => {
            dispatch(checkAssignment());
          }}
        >
          <p className="icon">
            <FaBook />
          </p>
          <h2> Assignment</h2>
        </Link>

        <Link
          className="links"
          onClick={() => {
            dispatch(checkSyllabus());
          }}
        >
          <p className="icon">
            <LuNotebookPen />
          </p>
          <h2> Syllabus</h2>
        </Link>

        <Link
          className="links"
          onClick={() => {
            dispatch(checkAttendance());
          }}
        >
          <p className="icon">
            <FaUserCheck />
          </p>
          <h2> Attendance</h2>
        </Link>

        <Link
          className="links"
          onClick={() => {
            dispatch(checkSetting());
          }}
        >
          <p className="icon">
            <PiGearSixBold />
          </p>
          <h2> Settings</h2>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================== */
  /* Mobile View */
  display: none;

  /* ========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    /* top: 0; */
    /* left: 0; */
    /* width: 50%; */
    color: white;
    height: 100%;
    display: block;
    /* position: fixed; */
    background: black;
    padding-top: 5rem;
    background: var(--clr-gradient-color);

    .link_container {
      gap: 2rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }

    .links {
      gap: 1rem;
      display: flex;
      padding: 1rem 0;
      font-weight: 700;
      font-size: 1.5rem;
      border-radius: 10px;
      align-items: center;
      color: var(--black-color);
      text-transform: capitalize;
      transition: var(--transitions);
    }

    .links:hover {
      text-align: center;
      justify-content: center;
      border: 2px solid var(--black-color);
      background-color: var(--bg-black-color);
    }

    .icon {
      display: flex;
      font-size: 1.8rem;
      align-items: center;
      color: var(--black-color) !important;
    }
  }
`;

export default DesktopSidebar;
