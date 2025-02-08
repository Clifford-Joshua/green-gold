import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../../ScrollToTop";

import Front from "../../../../Assets/bg6.jpg";
import Backend from "../../../../Assets/bg14.jpg";
import UI from "../../../../Assets/bg20.jpg";
import Cyber from "../../../../Assets/bg23.jpg";
import Data from "../../../../Assets/bg18.jpg";
import Software from "../../../../Assets/bg10.jpg";
import DevOps from "../../../../Assets/bg15.jpg";
import SE from "../../../../Assets/bg19.avif";
import Mobile from "../../../../Assets/bg26.jpg";

const Syllabus = () => {
  const handleDownload = (e) => {
    const target = e.target.parentElement;
    const imgSrc = target.querySelector(".course_img").src;

    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = "pdf-downloaded-image.jpg";
    link.click();

    toast.success("PDF Downloaded");
  };

  return (
    <Wrapper>
      <ScrollToTop />
      <div className="container_holder">
        <div className="course_container">
          <div className="img_container">
            <img src={Front} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Front End Development</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={Backend} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Backend Development</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={UI} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">UI/UX Designer</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={Cyber} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Cyber Security</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={Data} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Data Science</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={Software} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Software Development(Python)</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={DevOps} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">DevOps Engineering</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={SE} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Software Engineering</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>

        <div className="course_container">
          <div className="img_container">
            <img src={Mobile} alt="course_img" className="course_img" />
          </div>
          <h2 className="course_title">Mobile App Development</h2>
          <p className="course_text">30+ Examples 12 Assignment</p>
          <Link
            className="readMore btn btn-outline-warning"
            onClick={handleDownload}
          >
            Download PDF
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================ */
  /* Mobile View */
  display: flex;
  padding-block: 3rem;
  align-items: center;
  justify-content: center;

  .container_holder {
    gap: 1rem;
    width: 94%;
    display: grid;
    cursor: pointer;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .course_container {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    border: 2px solid var(--clr-gray-400);
  }

  .img_container {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .course_img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }

  .course_title {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--black-color);
  }

  .course_text {
    font-size: 1rem;
    color: var(--black-color);
  }

  .readMore {
    gap: 1rem;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    margin-top: auto;
    width: max-content;
    align-items: center;
    text-transform: capitalize;
    transition: var(--transitions);
  }

  .readMore:hover {
    color: var(--clr-darkgreen);
  }

  /* ============================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .course_title {
      font-size: 1.5rem;
    }

    :is(.course_text, .readMore) {
      font-size: 1.1rem;
    }
  }
`;

export default Syllabus;
