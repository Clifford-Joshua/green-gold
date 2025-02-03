import React from "react";
import styled from "styled-components";
import James from "../../../Assets/Professor James Harrington.jpg";
import Eleanor from "../../../Assets/Dr. Eleanor Grace.jpg";
import Ethan from "../../../Assets/Dr. Ethan Caldwell.jpg";
import Sophia from "../../../Assets/Professor Sophia Bennett.jpg";
import Olivia from "../../../Assets/Dr. Olivia Sinclair.jpg";
import Isabella from "../../../Assets/Professor Isabelle Montgomery.jpg";
import Samuel from "../../../Assets/Dr. Samuel Thornton.jpg";
import Margaret from "../../../Assets/Professor Margaret Rowley.jpg";

const ExclusiveTeam = () => {
  return (
    <Wrapper>
      <div className="general_container">
        <h2 className="title">
          We've Exclusive Team Member Meet Our Professionals
        </h2>
        <p className="text">
          In this series, we invite you to get to know the talented individuals
          behind our success. Each team member brings a unique set of skills,
          experiences, and perspectives that contribute to our mission and
          values. Join us as we showcase their expertise, passions, and the
          roles they play in driving innovation and excellence within our
          organization. Discover the stories that make our team not just
          professionals, but a family dedicated to achieving greatness together!
        </p>

        <div className="teachers_container">
          <div className="teacher">
            <img src={James} alt="img" className="image" />
            <h2 className="name">Professor James Harrington</h2>
            <p className="profession">Ceo</p>
          </div>

          <div className="teacher">
            <img src={Eleanor} alt="img" className="image" />
            <h2 className="name">Dr. Eleanor Grace</h2>
            <p className="profession">Chancellor</p>
          </div>

          <div className="teacher">
            <img src={Ethan} alt="img" className="image" />
            <h2 className="name">Dr. Ethan Caldwell</h2>
            <p className="profession">Dean</p>
          </div>

          <div className="teacher">
            <img src={Sophia} alt="img" className="image" />
            <h2 className="name">"Professor Sophia Bennett</h2>
            <p className="profession">Vice-Chancellor</p>
          </div>

          <div className="teacher">
            <img src={Olivia} alt="img" className="image" />
            <h2 className="name">Dr. Olivia Sinclair</h2>
            <p className="profession">Head of Department (HOD)</p>
          </div>

          <div className="teacher">
            <img src={Isabella} alt="img" className="image" />
            <h2 className="name">Professor Isabelle Montgomery</h2>
            <p className="profession">Professor</p>
          </div>

          <div className="teacher">
            <img src={Samuel} alt="img" className="image" />
            <h2 className="name">Dr. Samuel Thornton</h2>
            <p className="profession">Associate Professor</p>
          </div>

          <div className="teacher">
            <img src={Margaret} alt="img" className="image" />
            <h2 className="name">Professor Margaret Rowley</h2>
            <p className="profession">Lecturer</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================== */
  /* Mobile View */
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
  justify-content: center;

  .general_container {
    width: 94%;
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 900;
    font-size: 1.2rem;
    text-align: center;
    color: var(--clr-darkgreen);
  }

  .text {
    font-size: 0.9rem;
    color: var(--clr-charcoal-color);
  }

  .teachers_container {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .teacher {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding-block: 0.8rem;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var(--clr-light-orange);
  }

  .image {
    width: 90%;
    height: 40vh;
    object-fit: cover;
    border-radius: 15px;
    object-position: 0 10%;
  }

  .name {
    width: 90%;
    font-size: 1rem;
    font-weight: 800;
    color: var(--black-color);
  }

  .profession {
    width: 90%;
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--clr-darkgreen);
  }

  /* ================================================== */
  /* Ipad View */
  @media screen and (width>= 764px) {
    .name {
      font-size: 1.1rem;
    }

    .profession {
      font-size: 1.1rem;
    }
  }
`;

export default ExclusiveTeam;
