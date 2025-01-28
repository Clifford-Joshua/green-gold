import React from "react";
import styled from "styled-components";
import { OurOffer } from "./Offers";
const Offer = () => {
  return (
    <Wrapper>
      <OurOffer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================================== */
  /* Mobile */
  padding-top: 5rem;
  background-color: var(--clr-transparent-white);
`;

export default Offer;
