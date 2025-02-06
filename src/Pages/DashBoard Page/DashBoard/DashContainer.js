import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProfileNav from "../../Profile Page/Profile Content/ProfileNav";
import DashBoardHolder from "./Contents/DashBoardHolder";
import { Setting, Syllabus, Assignment, Attendance } from "./Pages";

const DashContainer = () => {
  const { isDashBoard, isAssignment, isSyllabus, isAttendance, isSetting } =
    useSelector((store) => store.user);

  return (
    <Wrapper>
      <ProfileNav />
      {isDashBoard && <DashBoardHolder />}
      {isAssignment && <Assignment />}
      {isSyllabus && <Syllabus />}
      {isAttendance && <Attendance />}
      {isSetting && <Setting />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================================= */
  /* Mobile View */
  width: 100%;
  padding-block: 1rem;
  border: 2px solid blue;
  background-color: var(--clr-transparent-white);

  ::-webkit-scrollbar {
    display: none;
  }

  /* ========================================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 70%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

export default DashContainer;
