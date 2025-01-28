import React from "react";
import EventInfo from "./EventInfo";
import ProfileImage from "./ProfileImage";
import EventFeature from "./EventFeature";
import EventArticle from "./EventArticle";
import styled from "styled-components";
const Container = () => {
  return (
    <Wrapper>
      <div className="Event_container">
        <ProfileImage />
        <EventArticle />
      </div>
      <div className="Event_info_container">
        <EventInfo />
        <EventFeature />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Container;
