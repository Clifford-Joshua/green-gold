import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Data } from "../../../../Utils/Data";
const EventContainer = () => {
  const { EventApi } = Data;
  const [isReadMore] = useState(false);

  const handleDetails = (EventName, EventText, EventImg) => {
    localStorage.setItem("EventName", EventName);
    localStorage.setItem("EventText", EventText);
    localStorage.setItem("EventImg", EventImg);
  };

  return (
    <Wrapper>
      <div className="container_holder">
        {EventApi.map(
          ({ eventIcon, eventImg, eventName, eventText }, index) => {
            return (
              <div className="event_container" key={index}>
                <div className="img_container">
                  <img src={eventImg} alt="event_img" className="event_img" />
                  <Link
                    to={`/event/:${eventName}`}
                    className="event_icon"
                    onClick={() =>
                      handleDetails(eventName, eventText, eventImg)
                    }
                  >
                    <div className="icon_holder">{eventIcon}</div>
                  </Link>
                </div>
                <h2 className="event_title">{eventName}</h2>
                <p className="event_text">
                  {isReadMore
                    ? eventText
                    : `${eventText.substring(0, 30)}.........`}
                </p>
                <Link
                  to={`/event/:${eventName}`}
                  className="readMore"
                  onClick={() => handleDetails(eventName, eventText, eventImg)}
                >
                  read more
                  <FaArrowRight />
                </Link>
              </div>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================ */
  /* Mobile View */
  display: flex;
  align-items: center;
  justify-content: center;

  .container_holder {
    gap: 1rem;
    width: 94%;
    display: grid;
    cursor: pointer;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .event_container {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid var(--clr-gray-400);
  }

  .img_container {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .event_img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }

  .event_icon {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: var(--transitions);
    background-color: var(--clr-transparent-white);
  }

  .icon_holder {
    width: 70px;
    height: 70px;
    display: flex;
    font-size: 1.8rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: var(--transitions);
  }

  .icon_holder:hover {
    color: var(--clr-light-orange);
    background-color: var(--clr-lighter-green);
  }

  :is(.event_container):hover .event_icon {
    opacity: 1;
  }

  .event_title {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--black-color);
  }

  .event_text {
    font-size: 1rem;
    color: var(--black-color);
  }

  .readMore {
    gap: 1rem;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    margin-top: auto;
    align-items: center;
    text-transform: capitalize;
    transition: var(--transitions);
  }

  .readMore:hover {
    color: var(--clr-darkgreen);
  }

  /* ============================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .event_title {
      font-size: 1.5rem;
    }

    :is(.event_text, .readMore) {
      font-size: 1.1rem;
    }
  }
`;
export default EventContainer;
