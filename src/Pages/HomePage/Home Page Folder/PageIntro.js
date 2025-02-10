import React, { useEffect, useRef, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import styled from "styled-components";
const PageIntro = () => {
  const refContainer = useRef();
  const [Height, setHeight] = useState();

  useEffect(() => {
    const container = refContainer.current;
    const height = container.getBoundingClientRect().height;

    setHeight(height - 35);
  }, []);

  return (
    <Wrapper>
      <div className="general_container" style={{ height: `${Height}px` }}>
        <div className="page_container" ref={refContainer}>
          <div className="address">
            <div className="icon_container">
              <GiReceiveMoney className="icon" />

              <h1 className="num">01</h1>
            </div>
            <h2 className="name">Scholarship Facility</h2>
            <p className="text">
              No. 12 Green Gold Crescent, Independence Layout, Enugu, Enugu
              State.
            </p>
          </div>

          <div className="address">
            <div className="icon_container">
              <FaUserSecret className="icon" />

              <h1 className="num">02</h1>
            </div>
            <h2 className="name">Skilled Lecturers</h2>
            <p className="text">
              No. 12 Green Gold Crescent, Independence Layout, Enugu, Enugu
              State.
            </p>
          </div>

          <div className="address">
            <div className="icon_container">
              <PiBooks className="icon" />
              <h1 className="num">03</h1>
            </div>
            <h2 className="name">Book Library Facility</h2>
            <p className="text">
              No. 12 Green Gold Crescent, Independence Layout, Enugu, Enugu
              State.
            </p>
          </div>

          <div className="address">
            <div className="icon_container">
              <FaSackDollar className="icon" />

              <h1 className="num">04</h1>
            </div>
            <h2 className="name">Affordable Price</h2>
            <p className="text">
              No. 12 Green Gold Crescent, Independence Layout, Enugu, Enugu
              State.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================== */
  /* Mobile View */

  .general_container {
    gap: 1rem;
    height: 30vh;
    display: flex;
    position: relative;
    padding-block: 1rem;
    align-items: center;
    padding-bottom: 7rem;
    flex-direction: column;
    justify-content: center;
    background-color: var(--bg-black-color);
  }

  .page_container {
    gap: 2rem;
    width: 94%;
    display: grid;
    position: absolute;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .address {
    gap: 0.5rem;
    display: flex;
    border-radius: 30px;
    flex-direction: column;
    padding: 1.2rem 0.8rem;
    color: var(--black-color);
    border-bottom-left-radius: 0;
    border: 2px solid var(--clr-darkgreen);
    background-color: var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .icon_container {
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
  }

  .icon {
    padding: 0.8rem;
    font-size: 4.5rem;
    border-radius: 50%;
    color: var(--bg-black-color);
    background-color: var(--clr-darkgreen);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .num {
    font-weight: 800;
    font-size: 3.5rem;
    font-family: "Londrina Sketch", serif;
  }

  .name {
    font-weight: 800;
    font-size: 1.1rem;
  }

  .text {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default PageIntro;
