import React from "react";
import Home01 from "../../../../Assets/homepage01.jpg";
import Home02 from "../../../../Assets/homepage02.jpg";
import Home03 from "../../../../Assets/homepage03.jpg";
import { FaUsersGear } from "react-icons/fa6";
import styled from "styled-components";
const AboutImages = () => {
  return (
    <Wrapper>
      <div className="image_container">
        <img src={Home01} alt="img" className="image" />
        <div className="content">
          <FaUsersGear className="icon" />
          <h3>30 Years Of Quality Service</h3>
        </div>
      </div>
      <div className="image_container">
        <img src={Home02} alt="img" className="circle_img" />
        <img src={Home03} alt="img" className="image last" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================= */
  /* Mobile view */
  gap: 1.5rem;
  display: flex;
  padding-block: 1rem;
  justify-content: center;
  flex-direction: column;

  .image_container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .content {
    padding: 1rem;
    display: flex;
    border-radius: 40px;
    align-items: center;
    border-bottom-left-radius: 0;
    justify-content: space-evenly;
    background-color: var(--clr-light-orange);
  }

  .icon {
    font-size: 5rem;
    padding: 0.8rem;
    border-radius: 50%;
    color: var(--clr-light-orange);
    background-color: var(--bg-black-color);
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    width: 40%;
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  .image {
    height: 65vh;
    border-radius: 20%;
    border-bottom-right-radius: 0;
  }

  .circle_img {
    padding: 1rem;
    border-radius: 50%;
    border: 5px dotted var(--clr-light-orange);
  }

  .last {
    border-radius: 20%;
    border-top-left-radius: 0;
  }

  /* ================================================= */
  /* Ipad view */
  @media screen and (width >= 764px) {
    width: 90%;
    flex-direction: row;

    .image {
      height: 35vh;
    }

    .circle_img {
      width: 30vh;
    }

    .image_container {
      width: 50%;
      align-items: center;
    }

    .icon {
      font-size: 6rem;
    }
  }

  /* ================================================= */
  /* Desktop view */
  @media screen and (width >=1023px) {
    .image {
      height: 50vh;
    }

    .image_container {
      width: 40%;
    }

    .circle_img {
      width: 40vh;
    }

    .content {
      width: 100%;
      padding: 1.3rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
`;

export default AboutImages;
