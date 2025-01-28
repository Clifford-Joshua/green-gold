import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import classRoom from "../../../Assets/classroom.jpg";
import animeImg from "../../../Assets/anime_classroom.jpg";
const EventArticle = () => {
  return (
    <Wrapper>
      <div className="article_container">
        <h2 className="title">
          {" "}
          {localStorage.getItem("EventName")
            ? localStorage.getItem("EventName")
            : ""}
        </h2>

        <p className="texts">
          {localStorage.getItem("EventText")
            ? localStorage.getItem("EventText")
            : ""}
        </p>

        <p className="texts">
          This diversity in learning ensures that people have access to
          resources to pursue their passions, solve problems, and contribute
          meaningfully to their communities. In a rapidly changing world, the
          importance of all Events cannot be overstated. They empower
          individuals to stay competitive, think critically, and embrace new
          opportunities. Whether you’re exploring new skills, deepening your
          expertise, or expanding your understanding of the world, every Event
          has the potential to transform your journey, making it richer and more
          fulfilling.
        </p>

        <div className="image_container">
          <img src={classRoom} alt="class_image" className="images" />
          <img src={animeImg} alt="class_image" className="images" />
        </div>

        <p className="texts">
          For lifelong learners, Events fuel curiosity and enrich lives by
          exposing them to diverse topics, cultures, and ideas. Each Event holds
          unique value because it caters to different needs, aspirations, and
          stages of life. From science and technology to arts and humanities,
          every Event builds bridges between theory and practice, helping
          learners apply their knowledge in real-world scenarios. Power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection.
        </p>
      </div>

      <div className="article_container">
        <h2 className="title">Event Requirement</h2>

        <p className="texts">
          Events are vital tools for personal and professional growth, offering
          structured learning experiences to expand knowledge, develop skills,
          and achieve goals. Regardless of the field or subject, every Event
          plays an essential role in shaping individuals into well-rounded,
          competent, and informed contributors to society. For students, Events
          provide foundational knowledge and insights that form the basis of
          their academic and career paths. For professionals, Events offer
          opportunities for continuous learning, ensuring they remain up-to-date
          in their industries, adapt to changes, and embrace innovation.
        </p>

        <div className="selection_container">
          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Structured Learning</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Skill Development</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Knowledge Expansion</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Career Advancement</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Professional Certification</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Adaptation to Change</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Personal Growth</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Networking Opportunities</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Specialized Knowledge</p>
          </div>
        </div>
      </div>

      <div className="article_container">
        <h2 className="title">Professional Experience</h2>

        <p className="texts">
          Professional experience is a cornerstone of career development and
          personal growth. It encompasses the knowledge, skills, and expertise
          gained through working in specific roles, industries, or projects over
          time. Unlike theoretical learning, professional experience provides
          hands-on exposure to real-world challenges, fostering problem-solving
          skills, adaptability, and the ability to apply knowledge in practical
          settings. Through professional experience, individuals gain a deeper
          understanding of workplace dynamics, such as teamwork, communication,
          and leadership. It helps build technical competencies while nurturing
          soft skills like time management, decision-making, and conflict
          resolution, which are crucial for success in any field.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================================== */
  /* Mobile View */
  gap: 2rem;
  display: flex;
  flex-direction: column;
  color: var(--black-color);

  .article_container {
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 800;
    line-height: 2rem;
    font-size: 1.7rem;
    text-transform: capitalize;
  }

  .texts {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--clr-charcoal-color);
  }

  .image_container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .images {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    border-radius: 15px;
  }

  .icons {
    font-size: 1.1rem;
    color: var(--clr-light-orange);
  }

  .select {
    gap: 1rem;
    display: flex;
    font-size: 1rem;
    align-items: center;
  }

  /* ================================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .icons {
      font-size: 1rem;
    }

    .texts {
      font-size: 1.1rem;
    }
  }

  @media screen and (width >= 1023px) {
    .images {
      height: 45vh;
      border: 2px solid white;
    }

    .texts {
      font-size: 0.95rem;
    }
  }
`;

export default EventArticle;
