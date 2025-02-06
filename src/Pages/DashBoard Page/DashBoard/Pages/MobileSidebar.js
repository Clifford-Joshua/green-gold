import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

import { SideNav } from "../../../../Shared/Features/NavSlice";
const MobileSidebar = () => {
  const { isSideNavOpen } = useSelector((store) => store.mobileNav);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={`sidebar_container ${isSideNavOpen && "show"}`}>
        <div className="link_container">
          <Link
            className="links"
            onClick={() => {
              dispatch(checkDashboard());
              dispatch(SideNav());
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
              dispatch(SideNav());
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
              dispatch(SideNav());
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
              dispatch(SideNav());
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
              dispatch(SideNav());
            }}
          >
            <p className="icon">
              <PiGearSixBold />
            </p>
            <h2> Settings</h2>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================== */
  /* Mobile View */
  .sidebar_container {
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    position: fixed;
    padding-top: 8rem;
    border: 2px solid blue;
    transform: translate(-150%);
    transition: var(--transitions);
    background: var(--clr-gradient-color);
  }

  .link_container {
    gap: 1.4rem;
    display: flex;
    flex-direction: column;
  }

  .links {
    gap: 1rem;
    display: flex;
    padding: 1rem 0;
    font-weight: 700;
    font-size: 1.4rem;
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

  .show {
    transform: translate(0%);
  }

  @media screen and (width >=763px) {
    .icon {
      font-size: 2rem;
    }
  }

  /* ========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    display: none;
  }
`;

export default MobileSidebar;
