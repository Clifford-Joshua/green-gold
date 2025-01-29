import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import classRoom from "../../../Assets/SchoolEvent.jpg";
import animeImg from "../../../Assets/AnimeEvent.jpg";
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
          School events play a crucial role in the overall development of
          students by providing opportunities beyond classroom learning. These
          events—whether academic, cultural, sports-related, or social—help
          students explore their talents, build confidence, and develop
          essential life skills such as teamwork, leadership, and communication.
          Events like science fairs, debate competitions, cultural festivals,
          and sports days encourage creativity, critical thinking, and a sense
          of healthy competition. They also foster school spirit and unity,
          bringing students, teachers, and parents together in a shared
          celebration of learning and achievement. Additionally, school events
          provide a platform for students to showcase their abilities, discover
          new interests, and gain practical experience that prepares them for
          future challenges. They create lasting memories, strengthen
          friendships, and make the school experience more enjoyable and
          fulfilling.
        </p>

        <div className="image_container">
          <img src={classRoom} alt="class_image" className="images" />
          <img src={animeImg} alt="class_image" className="images" />
        </div>

        <p className="texts">
          By participating in school events, students not only enhance their
          academic and extracurricular skills but also develop a sense of
          responsibility and discipline. These experiences contribute to shaping
          well-rounded individuals who are prepared to take on real-world
          challenges with confidence. Power of choice is untrammelled and when
          nothing prevents our being able to do what we like best, every
          pleasure is to be welcomed and every pain avoided. But in certain
          circumstances and owing to the claims of duty or the obligations of
          business it will frequently occur that pleasures have to be repudiated
          and annoyances accepted. The wise man therefore always holds in these
          matters to this principle of selection.
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
            <p className="texts">Encourage student participation</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Promote teamwork and collaboration</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Enhance creativity and talent development</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Foster school spirit and unity</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Provide a platform for leadership skills</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Strengthen communication and social skills</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Celebrate cultural diversity and inclusion</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Offer practical learning experiences</p>
          </div>

          <div className="select">
            <FaCheck className="icons" />
            <p className="texts">Build confidence and self-expression</p>
          </div>
        </div>
      </div>

      <div className="article_container">
        <h2 className="title">Professional Experience</h2>

        <p className="texts">
          Organizing a school event provides valuable professional experience by
          developing essential skills that are applicable in various career
          fields. Students gain hands-on exposure to event planning, teamwork,
          leadership, communication, and problem-solving, all of which are
          crucial in professional settings. Through roles such as event
          coordinators, volunteers, or organizers, students learn time
          management, budgeting, logistics handling, and decision-making. They
          also interact with teachers, peers, and external stakeholders,
          improving their ability to collaborate and manage responsibilities
          effectively. School events simulate real-world work environments,
          teaching students how to handle pressure, meet deadlines, and adapt to
          unexpected challenges. These experiences help build confidence,
          organizational skills, and a strong work ethic, all of which
          contribute to future academic and professional success.
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
