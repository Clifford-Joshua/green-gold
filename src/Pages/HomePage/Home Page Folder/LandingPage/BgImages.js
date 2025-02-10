import React from "react";
import styled from "styled-components";
import girl from "../../../../Assets/girl.png";
const BgImages = () => {
  return (
    <Wrapper>
      <div className="image_container">
        <img src={girl} alt="girl-image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================== */
  /* Mobile View */
  display: none;

  /* ====================================================== */
  /* Desktop View */
  @media screen and (width>=1023px) {
    width: 45%;
    height: 100%;
    display: flex;

    .image_container {
      width: 100%;
      height: 100%;
      background-color: #c8dbce;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default BgImages;
