import React from "react";
import styled from "styled-components";
import { FaBookReader } from "react-icons/fa";
const EventTitle = () => {
  return (
    <Wrapper>
      <h4 className="title_intro">
        <FaBookReader />
        upcoming events
      </h4>

      <h2 className="title">
        Our Upcoming <span className="green"> Events</span>{" "}
      </h2>

      <p className="sub_title">
        Green Gold Academy is delighted to announce our highly anticipated
        upcoming school event! This celebration promises to bring together our
        students, faculty, parents, and the broader community in an inspiring
        and fun-filled gathering that highlights the spirit of collaboration,
        creativity, and excellence that our school stands for. It is with great
        excitement that we invite everyone to join us as we showcase the
        talents, achievements, and unity of our school family.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--black-color);

  .title_intro {
    gap: 0.5rem;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--clr-darkgreen);
  }

  .title {
    font-weight: 800;
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .sub_title {
    width: 94%;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.7rem;
  }

  .green {
    padding-left: 0.4rem;
    color: var(--clr-darkgreen);
  }

  /* ===================================================== */
  /* Ipad View */
  @media screen and (width >= 763px) {
    padding-block: 1.5rem;

    .title_intro {
      font-size: 1.5rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .sub_title {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;

export default EventTitle;
