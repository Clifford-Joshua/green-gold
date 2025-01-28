import React from "react";
import EventInfo from "./EventInfo";
import ProfileImage from "./ProfileImage";
import EventFeature from "./EventFeature";
import EventArticle from "./EventArticle";
import styled from "styled-components";
const Container = () => {
  return (
    <Wrapper>
      <div className="general_holder">
        <div className="Event_container">
          <ProfileImage />
          <EventArticle />
        </div>
        <div className="Event_info_container">
          <EventInfo />
          <EventFeature />
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

  :is(.Event_container, .Event_info_container) {
    gap: 4rem;
    display: flex;
    flex-direction: column;
  }

  .Event_container {
    gap: 2rem;
  }

  /* ============================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .general_holder {
      width: 90%;
      flex-direction: row;
    }

    .Event_container {
      width: 60%;
    }

    .Event_info_container {
      width: 35%;
    }
  }
`;

export default Container;
