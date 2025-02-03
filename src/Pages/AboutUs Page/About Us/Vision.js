import React from "react";
import styled from "styled-components";
const Vision = () => {
  return (
    <Wrapper>
      <div className="general_container">
        <h2 className="title">
          Green Gold Academy – Mission, Vision, and Goals
        </h2>
        <p className="intro_text">
          At Green Gold Academy, we are driven by a deep commitment to
          excellence in education. Our focus is not only on academic achievement
          but also on nurturing well-rounded individuals who can thrive in an
          ever-evolving world. By providing a supportive and inspiring
          environment, we aim to empower students with the knowledge, skills,
          and values they need to become leaders, innovators, and compassionate
          global citizens.
        </p>

        <div className="goal_container">
          <div className="vision">
            <h2 className="sub_title">Our Mission</h2>
            <p className="text">
              To provide a high-quality, holistic education that empowers
              students to excel academically, grow personally, and contribute
              positively to society. We are committed to fostering critical
              thinking, creativity, and strong moral values, preparing our
              students for a rapidly changing world.
            </p>
          </div>

          <div className="vision">
            <h2 className="sub_title">Our vision</h2>
            <p className="text">
              To be a beacon of excellence in education, inspiring young minds
              to reach their full potential and become future leaders,
              innovators, and compassionate global citizens. We envision a
              community where education drives progress, empowers individuals,
              and shapes a better tomorrow.
            </p>
          </div>

          <div className="vision">
            <h2 className="sub_title">Our goal</h2>

            <ul>
              <li className="text">
                Academic Excellence: To create a rigorous and stimulating
                learning environment that challenges students to achieve their
                best.
              </li>

              <li className="text">
                Holistic Development: To nurture the intellectual, social,
                emotional, and physical growth of every student.
              </li>

              <li className="text">
                Innovation and Creativity: To foster a culture of curiosity,
                innovation, and problem-solving through modern teaching methods
                and technology integration.
              </li>

              <li className="text">
                Strong Values and Ethics: To instill discipline, integrity,
                empathy, and responsibility in students for a better society.
              </li>

              <li className="text">
                Global Preparedness: To prepare students for success in higher
                education, careers, and global opportunities by equipping them
                with essential skills and knowledge.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  display: flex;
  padding-block: 1rem;
  justify-content: center;
  background-color: var(--clr-darkgray);

  .general_container {
    gap: 1rem;
    width: 94%;
    display: flex;
    flex-direction: column;
  }

  ul {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style-type: disc;
  }

  .title {
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-lighter-green);
    text-shadow: 2px 2px var(--bg-black-color);
  }

  .intro_text {
    font-size: 0.9rem;
    color: black;
  }

  .goal_container {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .vision {
    gap: 0.6rem;
    display: flex;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
    background-color: var(--bg-black-color);
    border: 2px solid var(--clr-lighter-green);
  }

  .sub_title {
    font-weight: 900;
    font-size: 1.3rem;
    width: max-content;
    border-bottom: 3px dotted;
    color: var(--black-color);
    text-transform: capitalize;
  }

  .text {
    font-size: 0.8rem;
    color: var(--clr-charcoal-color);
  }
`;

export default Vision;
