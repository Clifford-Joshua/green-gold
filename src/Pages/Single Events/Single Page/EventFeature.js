import React from "react";
import styled from "styled-components";
import { Data } from "../../../Utils/Data";

const EventFeature = () => {
  const { CourseFeature } = Data;

  return (
    <Wrapper>
      <h2 className="title">
        <span className="dot">Event </span>
        Features
      </h2>

      <div className="feature_container">
        {CourseFeature.map(({ icon, title, detail }) => {
          return (
            <div className="features">
              <div className="icon_container">
                {icon}
                <h2 className="sub_title">{title}</h2>
              </div>
              <p className="num">{detail}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */
  padding: 1.5rem;
  border-radius: 15px;
  color: var(--bg-black-color);
  background-color: var(--black-color);

  .title {
    gap: 0.8rem;
    display: flex;
    font-weight: 600;
    font-size: 1.4rem;
    padding-block: 1rem;
    text-transform: capitalize;
  }

  .dot {
    border-bottom: 4px dotted var(--clr-light-orange);
  }

  .feature_container {
    gap: 1.5rem;
    display: flex;
    padding-block: 1.5rem;
    flex-direction: column;
  }

  .features {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon_container {
    gap: 0.5rem;
    display: flex;
    font-weight: 700;
    font-size: 1.08rem;
    align-items: center;
    color: var(--clr-light-orange);
  }

  .sub_title {
    color: var(--bg-black-color);
  }

  .num {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export default EventFeature;
