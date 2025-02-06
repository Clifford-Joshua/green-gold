import React from "react";
import styled from "styled-components";
import { GrMapLocation } from "react-icons/gr";
import { FaEnvelope, FaClock, FaPhoneAlt } from "react-icons/fa";
const Address = () => {
  return (
    <Wrapper>
      <div className="address_container">
        <div className="address">
          <div className="icon_container">
            <GrMapLocation className="icon" />
          </div>
          <h2 className="name">Office Address</h2>
          <p className="text">
            No. 12 Green Gold Crescent, Independence Layout, Enugu, Enugu State.
          </p>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaPhoneAlt className="icon" />
          </div>
          <h2 className="name">Call Us</h2>
          <p className="text">+234 803 450 0532</p>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaEnvelope className="icon" />
          </div>
          <h2 className="name">Email Us</h2>
          <a href="mailto:cliffordgb45@gmail.com" className="text">
            cliffordgb45@gmail.com
          </a>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaClock className="icon" />
          </div>
          <h2 className="name">Open Time</h2>
          <p className="text">Mon - Sat (10.00AM - 05.30PM)</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  padding-block: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .address_container {
    gap: 2rem;
    width: 94%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .address {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 30px;
    flex-direction: column;
    padding: 1.2rem 0.8rem;
    justify-content: center;
    color: var(--black-color);
    border-bottom-left-radius: 0;
    border: 2px solid var(--clr-darkgreen);
    background-color: var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .icon_container {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 2px solid blue;
    justify-content: center;
  }

  .icon {
    color: white;
    padding: 0.6rem;
    font-size: 3.5rem;
    border-radius: 50%;
    background-color: blue;
  }

  .name {
    font-weight: 800;
    font-size: 1.1rem;
  }

  .text {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;

export default Address;
