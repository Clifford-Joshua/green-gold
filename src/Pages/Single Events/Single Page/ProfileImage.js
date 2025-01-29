import React from "react";
import styled from "styled-components";
const ProfileImage = () => {
  const Image = localStorage.getItem("EventImg");
  return (
    <Wrapper>
      <img src={Image} alt="img" className="image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  .image {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    border-radius: 15px;
  }

  /* ===================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .image {
      height: 70vh;
    }
  }
`;

export default ProfileImage;
