import React from "react";
import styled from "styled-components";
import Profile from "../../../Assets/Biology.jpg";
const ContactProfile = () => {
  return (
    <Wrapper>
      <div className="img_container">
        <img src={Profile} alt="profile" className="img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile view */
  display: flex;
  align-items: center;
  justify-content: center;

  .img_container {
    width: 100%;
  }
  .img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  /* =================================================== */
  /* Desktop view */
  @media screen and (width >= 1023px) {
    width: 49%;
    .img {
      height: 60vh;
    }
  }
`;

export default ContactProfile;
