import React from "react";
import styled from "styled-components";
const ProfileImage = () => {
  const Image = localStorage.getItem("CourseImg");
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
    height: 30vh;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export default ProfileImage;
