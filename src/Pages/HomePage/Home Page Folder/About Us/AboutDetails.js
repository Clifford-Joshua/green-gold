import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiWikibooks } from "react-icons/si";
import { FaArrowRight, FaHeadphones, FaBookReader } from "react-icons/fa";
import { BiSolidBookBookmark } from "react-icons/bi";
const AboutDetails = () => {
  return (
    <Wrapper>
      <div className="aboutDetail_container">
        <h2 className="title">
          <FaBookReader />
          About us
        </h2>
        <h2 className="sub_title">
          Our Education System <span className="orange"> Inspires </span> You
          More.
        </h2>

        <p className="text">
          There are many variations of passages available but the majority have
          suffered alteration in some form by injected humour randomized words
          which don't look even slightly believable. If you are going to use
          passage.
        </p>

        <div className="education">
          <div className="education_content">
            <div className="content">
              <BiSolidBookBookmark className="big_icon" />

              <div className="content_detail">
                <h2 className="content_title">Education Services</h2>
                <p className="text">
                  It is a long established fact that reader will to using
                  content.
                </p>
              </div>
            </div>

            <div className="content">
              <SiWikibooks className="big_icon" />

              <div className="content_detail">
                <h2 className="content_title">International Hubs</h2>
                <p className="text">
                  It is a long established fact that reader will to using
                  content.
                </p>
              </div>
            </div>
          </div>
          <p className="article">
            It is a long established fact that a reader will be distracted by
            the content of a page when looking at its reader for the long words
            layout.
          </p>
        </div>

        <div className="contact">
          <Link to={"/aboutus"} className="link">
            Discover More
            <FaArrowRight />
          </Link>
          <div className="call">
            <FaHeadphones className="call_icon" />
            <div className="call_details">
              <h2 className="call_title">Call Now</h2>
              <h4 className="num">+234 816 548 7439</h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================================== */
  /* Mobile View */
  padding-bottom: 1.5rem;

  .aboutDetail_container {
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
    font-size: 2rem;
    text-align: center;
    color: var(--black-color);
    text-transform: capitalize;
  }

  .text {
    font-size: 0.9rem;
    color: var(--clr-darkgray);
  }

  :is(.education, .education_content, .contact) {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  :is(.content, .call) {
    gap: 1rem;
    display: flex;
    align-items: center;
  }

  .article {
    padding: 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
    background-color: var(--clr-darkgray);
  }

  .big_icon {
    padding: 1rem;
    font-size: 5rem;
    border-radius: 40px;
    box-shadow: var(--clr-box-shadow-gray);
    background-color: var(--clr-light-orange);
  }

  .content_title {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--black-color);
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

  .call_icon {
    padding: 1rem;
    font-size: 4rem;
    border-radius: 50%;
    color: var(--bg-black-color);
    background-color: var(--clr-darkgreen);
    box-shadow: var(--clr-box-shadow-gray);
  }

  .call_details {
    font-size: 1rem;
    font-weight: 600;
  }

  .call_title {
    color: var(--clr-light-orange);
  }

  .num {
    color: var(--clr-darkgreen);
  }

  /* ============================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .sub_title {
      font-size: 2rem;
    }

    .text {
      font-size: 1rem;
    }

    :is(.education, .contact) {
      flex-direction: row;
    }

    .education_content {
      width: 60%;
    }

    .article {
      width: 40%;
      font-size: 1.1rem;
    }

    .content_title {
      font-size: 1.2rem;
    }
  }

  /* ============================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .aboutDetail_container {
      align-items: center;
    }

    .sub_title {
      font-size: 2rem;
    }

    .text {
      font-size: 1.1rem;
    }

    .content_title {
      font-size: 1.4rem;
    }
  }
`;

export default AboutDetails;
