import React from "react";
import styled from "styled-components";
import CEO from "../../../Assets/Professor James Harrington.jpg";
const AboutProfile = () => {
  return (
    <Wrapper>
      <img src={CEO} alt="CEO PROFILE" className="ceo_profile" />
      <h2 className="ceo_name">Professor James Harrington</h2>
      <p className="profession">CEO</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ======================================================= */
  /* Mobile View */
  gap: 0.6rem;
  display: flex;
  padding-block: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .ceo_profile {
    width: 95%;
    height: 60vh;
    object-fit: cover;
    border-radius: 15px;
    object-position: 0 0;
  }

  .ceo_name {
    width: 95%;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
    color: var(--black-color);
  }

  .profession {
    font-size: 1rem;
    font-weight: 600;
    color: var(--clr-darkgreen);
  }

  /* ==================================================== */
  /* Ipad View */
  @media screen and (width >= 745px) {
    .ceo_profile {
      height: 40vh;
      object-position: 0 15%;
    }

    .ceo_name {
      font-size: 1.6rem;
    }

    .profession {
      font-size: 1.2rem;
    }
  }

  /* ==================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .ceo_profile {
      width: 60%;
      height: 50vh;
    }
  }
`;

export default AboutProfile;
