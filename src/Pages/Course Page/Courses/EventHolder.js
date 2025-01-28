import React from "react";
import EventTitle from "./Event Folder/EventTitle";
import styled from "styled-components";
import EventContainer from "./Event Folder/EventContainer";
const EventHolder = () => {
  return (
    <Wrapper className="EventMainHolder">
      <EventTitle />
      <EventContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile Views */
  padding-block: 3rem;
  background-color: var(--clr-transparent-white);
`;

export default EventHolder;
