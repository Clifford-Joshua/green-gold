import React from "react";
import styled from "styled-components";
import { GiMaterialsScience } from "react-icons/gi";
import { FaUsers, FaRegAddressBook, FaUserCheck } from "react-icons/fa";
const UserDetails = () => {
  return (
    <Wrapper>
      <div className="address_container">
        <div className="address">
          <div className="icon_container">
            <GiMaterialsScience className="icon" />
          </div>
          <h2 className="name">Your Projects</h2>
          <p className="text">Total Project 20/50</p>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaUserCheck className="icon" />
          </div>
          <h2 className="name">Your Attendance</h2>
          <p className="text">Attendance 70%</p>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaRegAddressBook className="icon" />
          </div>
          <h2 className="name">Total Scores</h2>
          <p className="text">Mark scored 600/600</p>
        </div>

        <div className="address">
          <div className="icon_container">
            <FaUsers className="icon" />
          </div>
          <h2 className="name">School Position</h2>
          <p className="text">Leadership</p>
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
    width: 100%;
    display: grid;
    padding: 1rem;
    border-radius: 20px;
    background-color: var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
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
    border: 2px solid var(--clr-darkgreen);
    background-color: var(--clr-light-orange);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .icon_container {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 2px solid blue;
    justify-content: center;
  }

  .icon {
    color: white;
    padding: 0.6rem;
    font-size: 3rem;
    border-radius: 50%;
    background-color: blue;
  }

  .name {
    font-weight: 800;
    font-size: 0.9rem;
    text-align: center;
  }

  .text {
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;
  }

  @media screen and (width >=764px) {
    .icon_container {
      width: 85px;
      height: 85px;
    }

    .address_container {
      padding: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media screen and (width >=764px) {
    .address_container {
      padding: 1.8rem;
    }

    .icon_container {
      width: 100px;
      height: 100px;
    }
  }
`;

export default UserDetails;
