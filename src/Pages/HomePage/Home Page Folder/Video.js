import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../../Assets/classroom.jpg";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import video from "../../../Assets/videos/Home.mp4";
import { FaArrowRight, FaBookReader } from "react-icons/fa";

const Video = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  if (videoRef.current) {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <Wrapper>
      <div className="aboutDetail_container">
        <div className="text_content">
          <h2 className="title">
            <FaBookReader />
            Latest Video
          </h2>
          <h2 className="sub_title">
            Let's Check Our <span className="orange"> Latest </span> Video
          </h2>

          <p className="text">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour look even
            slightly believable.
          </p>

          <div className="contact">
            <Link to={"/dashboard"} className="link">
              Discover More
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="video_container">
          <video
            src={video}
            className="video"
            poster={bg}
            ref={videoRef}
            loop
          ></video>
          <div className="controls" onClick={() => setPlay(!play)}>
            <div className="icons">{play ? <FaPause /> : <FaPlay />}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================================== */
  /* Mobile View */
  display: flex;
  flex-direction: column;
  padding-block: 1.5rem;
  align-items: center;
  background-color: var(--clr-transparent-white);

  :is(.aboutDetail_container, .text_content) {
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
    font-size: 1.3rem;
    width: max-content;
    align-items: center;
    letter-spacing: 0.3rem;
    border-bottom: 2px solid;
    text-transform: uppercase;
    color: var(--clr-light-orange);
  }

  .sub_title {
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--black-color);
    text-transform: capitalize;
  }

  .text {
    font-size: 0.9rem;
    color: var(--clr-darkgray);
  }

  .link {
    gap: 1rem;
    display: flex;
    padding: 1rem;
    font-weight: 600;
    width: max-content;
    align-items: center;
    border-radius: 40px;
    color: var(--bg-black-color);
    border-bottom-left-radius: 0;
    transition: var(--transitions);
    background-color: var(--clr-light-orange);
  }

  .link:hover {
    background-color: var(--clr-darkgreen);
  }

  .video_container {
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    padding-block: 1.5rem;
    justify-content: center;
  }

  .video {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 50px;
    border-bottom-left-radius: 0;
  }

  .controls {
    width: 100%;
    height: 40vh;
    display: flex;
    position: absolute;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0;
    background-color: rgba(0, 0, 0, 0.623);
  }

  .icons {
    width: 80px;
    height: 80px;
    display: flex;
    font-size: 2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: var(--bg-black-color);
    background-color: var(--clr-light-orange);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  /* ============================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .sub_title {
      font-size: 2rem;
      text-align: center;
    }

    .text {
      font-size: 1rem;
    }
  }

  /* ============================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .aboutDetail_container {
      flex-direction: row;
    }

    .text_content {
      gap: 2rem;
    }

    .title {
      margin: 0 auto;
    }

    .sub_title {
      font-size: 2rem;
    }

    .text {
      font-size: 1.1rem;
    }
  }
`;

export default Video;
