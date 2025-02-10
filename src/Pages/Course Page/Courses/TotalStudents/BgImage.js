import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { GiBookCover } from "react-icons/gi";
import Image from "../../../../Assets/StudentBg.jpg";
import { FaUserGraduate, FaHospitalUser } from "react-icons/fa6";

const BgImage = () => {
  return (
    <Wrapper>
      <div className="total">
        <div className="icon_container">
          <div className="icon_holder">
            <GiBookCover className="icon" />
          </div>
          <div className="border_line"></div>
        </div>
        <h2 className="totals">500</h2>
        <h3 className="names">
          <FaPlus />
          Total Courses
        </h3>
      </div>

      <div className="total">
        <div className="icon_container">
          <div className="icon_holder">
            <FaUserGraduate className="icon" />
          </div>
          <div className="border_line"></div>
        </div>
        <h2 className="totals">750</h2>
        <h3 className="names">
          <FaPlus />
          Our Students
        </h3>
      </div>

      <div className="total">
        <div className="icon_container">
          <div className="icon_holder">
            <FaHospitalUser className="icon" />
          </div>
          <div className="border_line"></div>
        </div>
        <h2 className="totals">350</h2>
        <h3 className="names">
          <FaPlus />
          Total Hospitals
        </h3>
      </div>

      <div className="total">
        <div className="icon_container">
          <div className="icon_holder">
            <TfiCup className="icon" />
          </div>
          <div className="border_line"></div>
        </div>
        <h2 className="totals">50</h2>
        <h3 className="names">
          <FaPlus />
          Total Awards
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =============================================================== */
  /* Mobile View */
  gap: 3rem;
  display: grid;
  padding-block: 4rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background: linear-gradient(
      to top,
      rgba(17, 110, 99, 0.62),
      rgba(17, 110, 99, 0.5),
      rgba(17, 110, 99, 0.57)
    ),
    url(${Image}) center/cover no-repeat fixed;

  .total {
    gap: 0.5rem;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .icon_container {
    z-index: 1;
    width: 130px;
    height: 130px;
    position: relative;
  }

  .icon_holder {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 40%;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 100%;
    background-color: var(--clr-light-orange);
  }

  .icon {
    font-size: 3.5rem;
  }

  .border_line {
    top: 10%;
    left: 5%;
    z-index: -1;
    width: 130px;
    height: 130px;
    position: absolute;
    border: 3px solid white;
    border-top-right-radius: 10%;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 60%;
  }

  .totals {
    font-weight: 800;
    padding-top: 1rem;
    font-size: 2.5rem;
  }

  .names {
    gap: 0.5rem;
    display: flex;
    font-weight: 800;
    align-items: center;
  }
`;

export default BgImage;
