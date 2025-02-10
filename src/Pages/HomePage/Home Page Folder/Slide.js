import React from "react";
import logo1 from "../../../Assets/logo1.png";
import logo2 from "../../../Assets/logo2.png";
import logo3 from "../../../Assets/logo3.png";
import logo4 from "../../../Assets/logo4.jpg";
import logo5 from "../../../Assets/logo5.png";
import logo6 from "../../../Assets/logo6.jpg";
import styled from "styled-components";
const Slide = () => {
  return (
    <Wrapper>
      <div className="slide_container">
        <img src={logo1} alt="img" className="image" />
        <img src={logo2} alt="img" className="image" />
        <img src={logo3} alt="img" className="image" />
        <img src={logo4} alt="img" className="image" />
        <img src={logo5} alt="img" className="image" />
        <img src={logo6} alt="img" className="image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================ */
  /* Mobile View */
  overflow: hidden;
  padding: 2rem;
  background-color: var(--clr-charcoal-color);

  .slide_container {
    gap: 1rem;
    display: flex;
    width: max-content;
    animation: slide 25s linear infinite;
  }

  .image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid var(--bg-black-color);
  }

  /* ====================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .slide_container {
      gap: 5rem;
      animation: slide 45s linear infinite;
    }

    .image {
      width: 150px;
      height: 150px;
    }
  }

  @keyframes slide {
    from {
      transform: translate(100%);
    }
    to {
      transform: translate(-120%);
    }
  }
`;

export default Slide;
