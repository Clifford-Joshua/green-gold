import React from "react";
import styled from "styled-components";
import { Data } from "../../../Utils/Data";
import bg from "../../../Assets/AnimeEvent.jpg";
import { FaStar, FaBookReader } from "react-icons/fa";

const Testimony = () => {
  const { Testimonies } = Data;

  return (
    <Wrapper>
      <div className="aboutDetail_container">
        <h2 className="title">
          <FaBookReader />
          Testimonials
        </h2>
        <h2 className="sub_title">
          What Our Students <span className="orange">Say's</span>
        </h2>

        <p className="text">
          Our students love their learning experience with us! They praise our
          engaging lessons, supportive teachers, and practical approach to
          education. Many have shared how our programs have boosted their
          confidence, skills, and career opportunities. Join us and become part
          of a thriving community where learning leads to success!
        </p>

        <div className="testimonies_container">
          {Testimonies.map(
            ({ stars, testimony, picture, name, student }, index) => {
              return (
                <div className="testimony" key={index}>
                  <div className="stars">
                    {stars.map((_, index) => {
                      return <FaStar key={index} />;
                    })}
                  </div>
                  <p className="text">{testimony}</p>
                  <div className="user_details">
                    <img src={picture} alt="img" className="profile" />
                    <div className="details">
                      <h3 className="name">{name}</h3>
                      <p className="student">{student}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================================== */
  /* Mobile View */
  display: flex;
  align-items: center;
  padding-block: 1.5rem;
  justify-content: center;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.623),
      rgba(0, 0, 0, 0.623),
      rgba(0, 0, 0, 0.623)
    ),
    url(${bg}) center/cover, no-repeat;

  .aboutDetail_container {
    width: 94%;
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  .orange {
    color: var(--clr-light-orange);
  }

  .title {
    gap: 1rem;
    margin: auto;
    display: flex;
    font-weight: 600;
    font-size: 1.1rem;
    width: max-content;
    align-items: center;
    letter-spacing: 0.3rem;
    border-bottom: 2px solid;
    text-transform: uppercase;
    color: var(--clr-light-orange);
  }

  .sub_title {
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    text-transform: capitalize;
  }

  .text {
    font-size: 0.8rem;
    color: var(--clr-darkgray);
  }

  .testimonies_container {
    gap: 1.2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .testimony {
    gap: 1.5rem;
    display: flex;
    padding: 1.5rem;
    border-radius: 40px;
    flex-direction: column;
    border-bottom-left-radius: 0;
    background-color: var(--bg-black-color);
    border-bottom: 8px solid var(--clr-lighter-green);
  }

  :is(.stars, .user_details) {
    gap: 0.5rem;
    display: flex;
    font-size: 1.3rem;
    align-items: center;
    color: var(--clr-light-orange);
  }

  .profile {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    object-position: 0 0;
    border: 4px dotted var(--clr-lighter-green);
  }

  :is(.student, .name) {
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  .name {
    font-size: 1.2rem;
    color: var(--black-color);
  }

  /* ==================================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.2rem;
    }

    .sub_title {
      font-size: 1.7rem;
    }

    .text {
      font-size: 0.9rem;
    }
  }
`;

export default Testimony;
