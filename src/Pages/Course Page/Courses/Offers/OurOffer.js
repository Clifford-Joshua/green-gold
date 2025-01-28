import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../../../../Assets/offer.jpg";
import { FaArrowRight } from "react-icons/fa";
const OurOffer = () => {
  const refContainer = useRef(null);
  const [Height, setHeight] = useState(0);

  useEffect(() => {
    const container = refContainer.current;
    const height = container.getBoundingClientRect().height;

    setHeight(height - 40);
  }, []);

  return (
    <Wrapper>
      <div className="offer_bg" style={{ height: `${Height}px` }}>
        <div className="offer_container" ref={refContainer}>
          <div className="lines">
            <div className="lines last_line">
              <h2 className="offer_title">
                Our 20% Offer Running - Join Today For Your Course
              </h2>
              <p className="text">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour
                randomised words which don't look even slightly believable.
              </p>
              <Link to={""} className="enroll">
                Apply Now
                <FaArrowRight />
              </Link>
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

  .offer_bg {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: url(${Image}) center / cover no-repeat;
  }

  .offer_container {
    bottom: 0;
    width: 94%;
    padding: 0.6rem;
    overflow: hidden;
    position: absolute;
    border-radius: 30px;
    border-bottom-left-radius: 0;
    background-color: var(--clr-light-orange);
  }

  .lines {
    padding: 0.3rem;
    border-radius: 20px;
    border: 3px solid white;
    border-bottom-left-radius: 0;
  }

  .last_line {
    padding: 3rem 1rem;
  }

  .offer_title {
    color: white;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
  }

  .text {
    color: white;
    font-weight: 550;
    padding: 1.5rem 0;
    line-height: 2rem;
    font-size: 1.05rem;
  }

  .enroll {
    gap: 0.5rem;
    color: black;
    padding: 1rem;
    display: flex;
    font-weight: 600;
    font-size: 0.9rem;
    width: max-content;
    align-items: center;
    border-radius: 40px;
    background-color: white;
    border-bottom-left-radius: 0;
    transition: var(--transitions);
  }

  .enroll:hover {
    color: white;
    background-color: #097629;
  }

  /* =============================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .offer_bg {
      justify-content: end;
    }
    .offer_container {
      width: 40%;
      margin-right: 4rem;
    }
  }
`;

export default OurOffer;
