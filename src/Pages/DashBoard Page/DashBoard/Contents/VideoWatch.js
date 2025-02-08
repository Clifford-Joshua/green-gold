import React from "react";
import Ai from "../../../../Assets/bg4.jpg";
import UIUX from "../../../../Assets/bg20.jpg";
import BackEnd from "../../../../Assets/bg10.jpg";
import Frontend from "../../../../Assets/bg14.jpg";
import UiVideo from "../../../../Assets/videos/uiux.mp4";
import AiVideo from "../../../../Assets/videos/tech.mp4";
import BackVideo from "../../../../Assets/videos/backened.mp4";
import FrontVideo from "../../../../Assets/videos/frontend.mp4";
import styled from "styled-components";
const VideoWatch = () => {
  return (
    <Wrapper>
      <h2 className="video_title">Continue Watching tutorials</h2>

      <div className="Course">
        <div className="course_container">
          <video
            src={FrontVideo}
            className="course_img"
            poster={Frontend}
            controls
          ></video>
          <div className="course_details">
            <h2 className="course_title">Frontend Developer</h2>
            <p className="detail">
              Beginners guide to becoming a front end developer
            </p>
          </div>
        </div>

        <div className="course_container">
          <video
            src={UiVideo}
            className="course_img"
            poster={UIUX}
            controls
          ></video>

          <div className="course_details">
            <h2 className="course_title">UI/UX Designer</h2>
            <p className="detail">
              Optimizing users Experience with the best UI/UX design
            </p>
          </div>
        </div>

        <div className="course_container">
          <video
            src={BackVideo}
            className="course_img"
            poster={BackEnd}
            controls
          ></video>

          <div className="course_details">
            <h2 className="course_title">Backend Developer</h2>
            <p className="detail">
              Bringing simplicity to a Beginner Backend developer
            </p>
          </div>
        </div>

        <div className="course_container">
          <video
            src={AiVideo}
            className="course_img"
            poster={Ai}
            controls
          ></video>

          <div className="course_details">
            <h2 className="course_title">Ai</h2>
            <p className="detail">Pick a date for your learning schedule</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */
  padding-block: 3rem;

  .Course {
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .video_title {
    font-weight: 500;
    font-size: 1.45rem;
    padding-block: 1rem;
    color: var(--black-color);
  }

  .course_container {
    gap: 1rem;
    display: flex;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .course_details {
    color: var(--black-color);
  }

  .course_img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-radius: 15px;
  }

  .course_title {
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }

  .detail {
    font-size: 0.9rem;
  }
`;

export default VideoWatch;
