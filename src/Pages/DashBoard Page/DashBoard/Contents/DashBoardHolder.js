import React from "react";
import Task from "./Task";
import Schedule from "./Schedule";
import VideoWatch from "./VideoWatch";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import UserAssignment from "./UserAssignment";

const DashBoardHolder = () => {
  return (
    <Wrapper>
      <div className="dashboard_container">
        <UserDetails />
        <VideoWatch />
        <UserAssignment />
        <Task />
        <Schedule />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  .dashboard_container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  @media screen and (width>=764px) {
    .dashboard_container {
      gap: 2.5rem;
    }
  }
`;

export default DashBoardHolder;
