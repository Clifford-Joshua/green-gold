import React from "react";
import Image from "../../../Assets/bg1.jpg";
import styled from "styled-components";

const StudentLearning = () => {
  return (
    <Wrapper>
      <div className="general_container">
        <h2 className="title">What's Make Green Gold Unique?</h2>

        <img src={Image} alt="Images" className="image" />

        <p className="text">
          At Green Gold Academy, we stand out as a beacon of excellence in
          education. Our unique approach to learning goes beyond the classroom,
          focusing on nurturing well-rounded individuals who are ready to thrive
          in a dynamic world. Here’s what sets us apart:
        </p>

        <div className="student_container">
          <div className="detail_container">
            <h3 className="sub_title">Holistic Education Approach </h3>
            <p className="text">
              We believe in developing every aspect of a student’s
              potential—academically, socially, and emotionally. From rigorous
              academics to character-building activities, our curriculum ensures
              students grow into confident, responsible citizens.
            </p>
          </div>

          <div className="detail_container">
            <h3 className="sub_title"> Innovative Teaching Methods </h3>
            <p className="text">
              Our teachers use modern, student-centric approaches to make
              learning engaging and effective. We integrate technology and
              interactive methods to foster curiosity and a love for learning.
            </p>
          </div>

          <div className="detail_container">
            <h3 className="sub_title">Personalized Attention </h3>
            <p className="text">
              With small class sizes and a supportive environment, every student
              gets the attention they need to excel. Our educators work closely
              with each student to identify their strengths and areas for
              improvement.
            </p>
          </div>

          <div className="detail_container">
            <h3 className="sub_title">State-of-the-Art Facilities </h3>
            <p className="text">
              Green Gold Academy boasts cutting-edge infrastructure, including
              advanced science labs, technology centers, and sports facilities,
              creating an inspiring and well-equipped learning environment.
            </p>
          </div>

          <div className="detail_container">
            <h3 className="sub_title">A Focus on Values and Leadership </h3>
            <p className="text">
              We aim to instill strong values and leadership qualities in our
              students. Through extracurricular activities, community
              involvement, and leadership programs, we prepare students to make
              a positive impact on society.
            </p>
          </div>

          <div className="detail_container">
            <h3 className="sub_title">Commitment to Excellence </h3>
            <p className="text">
              Our unwavering commitment to providing high-quality education
              ensures that every student is prepared for success in higher
              education, careers, and life.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  display: flex;
  justify-content: center;

  .general_container {
    gap: 1rem;
    width: 94%;
    display: flex;
    flex-direction: column;
  }

  .student_container {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .title {
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
    color: var(--black-color);
  }

  .image {
    height: 40vh;
    object-fit: cover;
    border-radius: 20px;
    object-position: 0 0;
    border-bottom-left-radius: 0;
  }

  .detail_container {
    gap: 0.6rem;
    display: flex;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
    background-color: var(--black-color);
    border: 2px solid var(--clr-lighter-green);
  }

  .sub_title {
    font-weight: 800;
    font-size: 1.3rem;
    text-align: center;
    color: var(--clr-light-orange);
    border: 3px dotted var(--bg-black-color);
  }

  .text {
    font-size: 0.9rem;
    color: var(--clr-gray-400);
  }

  /* =================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default StudentLearning;
