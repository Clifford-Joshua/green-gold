import React from "react";
import styled from "styled-components";

const AboutIntro = () => {
  return (
    <Wrapper>
      <div className="about_container">
        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title"> Customized Learning for the Digital Era</h2>
            <p className="text">
              Empower your team or yourself with personalized training solutions
              designed to meet the demands of the digital age. Our programs
              adapt to your unique goals, ensuring practical and actionable
              results.
            </p>
          </div>
        </div>

        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title">Innovative Tech Skills Development</h2>
            <p className="text">
              Master the latest technologies with cutting-edge training that
              bridges the gap between knowledge and application. Stay ahead of
              the curve with our hands-on, forward-thinking approach.
            </p>
          </div>
        </div>

        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title">Personalized Digital Mastery Programs</h2>
            <p className="text">
              Take control of your growth with learning programs that are
              tailored to your industry and skill level. We focus on practical
              skills to help you excel in your digital endeavors.
            </p>
          </div>
        </div>

        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title">
              {" "}
              Advanced Training for a Tech-Savvy Workforce
            </h2>
            <p className="text">
              Up skill your workforce with specialized training that enhances
              efficiency, fosters innovation, and prepares your team to thrive
              in a rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title"> Bespoke Solutions for Digital Excellence</h2>
            <p className="text">
              Our tailored programs provide focused, high-impact training that
              equips individuals and businesses with the digital skills needed
              to succeed in competitive markets.
            </p>
          </div>
        </div>

        <div className="intro_container">
          <div className="black_container"></div>
          <div className="text_container">
            <h2 className="title">Professional Digital Growth Workshops</h2>
            <p className="text">
              Learn from experts in technology and innovation through workshops
              and training programs designed to inspire, educate, and transform
              your digital capabilities.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================= *
/* Mobile View/ */
  display: flex;
  justify-content: center;
  background-color: var(--black-color);

  .about_container {
    width: 94%;
    gap: 1.5rem;
    display: grid;
    padding-block: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .intro_container {
    z-index: 1;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    transition: var(--transitions);
  }

  .intro_container:hover {
    transform: scale(1.05);
  }

  .black_container {
    right: 0;
    width: 75%;
    z-index: -1;
    height: 100%;
    position: absolute;
    border-radius: 15px;
    background-color: var(--clr-gray-400);
  }

  .text_container {
    gap: 1rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    padding-block: 0.8rem;
  }

  .title {
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--clr-light-orange);
    text-shadow: 2px 2px var(--bg-black-color);
  }

  .text {
    font-size: 0.9rem;
    color: var(--bg-black-color);
    text-shadow: 1px 1px var(--black-color);
  }

  /* ========================================================= *
/* Ipad View/ */
  @media screen and (width >= 764px) {
    .text_container {
      width: 80%;
    }

    .title {
      font-size: 1.4rem;
    }

    .text {
      font-size: 1rem;
    }
  }
`;

export default AboutIntro;
