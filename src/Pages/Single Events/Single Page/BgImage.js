import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BKgImage from "../../../Assets/SingleEventBg.jpg";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
const BgImage = () => {
  return (
    <Wrapper>
      <div className="title_container">
        <h2 className="title">Single Event</h2>
        <h2 className="back_home">
          <Link to={"/"}>home</Link>
          <TbPlayerTrackNextFilled />

          <span className="color">Single Event</span>
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  width: 100%;
  height: 50vh;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.514),
      rgba(0, 0, 0, 0.568),
      rgba(0, 0, 0, 0.432)
    ),
    url(${BKgImage}) center/cover, no-repeat;

  .title_container {
    gap: 0.3rem;
    display: flex;
    padding-top: 6rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-weight: 700;
    font-size: 2.4rem;
    text-transform: capitalize;
  }

  .back_home {
    gap: 0.5rem;
    display: flex;
    font-weight: 600;
    font-size: 1.1rem;
    align-items: center;
    text-transform: capitalize;
  }

  .color {
    color: var(--clr-light-orange);
  }

  /* =================================================== */
  /* Ipad View */
  @media screen and (width >=764px) {
    height: 40vh;

    .back_home {
      font-size: 1.2rem;
    }
  }

  /* =================================================== */
  /* Desktop View */
  @media screen and (width >=1023px) {
    height: 70vh;
  }
`;

export default BgImage;
