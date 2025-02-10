import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <div className="title_container">
        <h2 className="title">
          <span className="orange">city of knowledge and </span> ever
          flourishing wisdom
        </h2>

        <p className="text">quality education for all academic level</p>

        <Link to={"/signup"} className="enroll">
          <p className="line"></p>

          <h2>enroll now</h2>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  padding-top: 6.5rem;
  text-transform: capitalize;

  .title_container {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-weight: 900;
    font-size: 2.4rem;
    color: var(--clr-darkgreen);
  }

  .orange {
    color: var(--clr-light-orange);
  }

  .text {
    font-weight: 500;
    font-size: 1.3rem;
    color: var(--black-color);
  }

  .enroll {
    gap: 1rem;
    display: flex;
    padding: 1rem;
    cursor: pointer;
    font-weight: 500;
    width: max-content;
    align-items: center;
    justify-content: center;
    color: var(--bg-black-color);
    transition: var(--transitions);
    background-color: var(--clr-darkgreen);
  }

  .line {
    height: 3px;
    width: 50px;
    background-color: var(--bg-black-color);
  }

  .enroll:hover {
    background-color: var(--black-color);
  }

  /* ====================================================== */
  /* Ipad View */
  @media screen and (width>=764px) {
    padding-top: 8rem;
    padding-bottom: 5rem;

    .title {
      font-size: 2.7rem;
    }

    .text {
      font-size: 1.5rem;
    }

    .enroll {
      font-size: 1.2rem;
    }
  }

  /* ====================================================== */
  /* Desktop View */
  @media screen and (width>=1023px) {
    width: 55%;

    .title {
      font-size: 3rem;
    }

    .title_container {
      gap: 2rem;
    }
  }
`;

export default Title;
