import React from "react";
import styled from "styled-components";
const ImageBg = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">The Golden Mind, The Flourishing Mind</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =============================== */
  /* Mobile View  and Ipad View*/
  display: none;

  /* =============================== */
  /* Desktop View*/
  @media screen and (width >= 1023px) {
    width: 45%;
    display: block;

    .container {
      height: 100%;
      display: flex;
      align-items: end;
      position: relative;
      justify-content: center;
      background: var(--signup-GirlLibrary);
    }

    .title {
      width: 80%;
      height: 45%;
      color: white;
      font-weight: 600;
      padding: 1rem 3rem;
      text-align: center;
      font-size: 2.25rem;
    }
  }
`;
export default ImageBg;
