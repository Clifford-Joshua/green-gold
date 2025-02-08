import React from "react";
import styled from "styled-components";
const Task = () => {
  return (
    <Wrapper>
      <div className="assignment_container">
        <h2 className="title">Pending Task</h2>

        <div className="assignment_details">
          <div className="assignment">
            <h2 className="sub_title">50%</h2>

            <h2 className="num">html</h2>

            <h4 className="task"> 7 tasks </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">65%</h2>

            <h2 className="num">ui ux design</h2>

            <h4 className="task">25 tasks </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">60%</h2>

            <h2 className="num">styling with css</h2>

            <h4 className="task">85 tasks </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">__%</h2>

            <h2 className="num">react</h2>

            <h4 className="task text-danger">0 task </h4>
          </div>

          <div className="assignment">
            <h2 className="sub_title">10%</h2>

            <h2 className="num">python</h2>

            <h4 className="task text-warning">2 tasks </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  color: var(--black-color);

  .assignment_container {
    gap: 1rem;
    display: flex;
    border-radius: 15px;
    padding: 1rem 0.7rem;
    flex-direction: column;
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .title {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: capitalize;
    color: var(--clr-darkgreen);
  }

  .assignment_details {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .assignment {
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 1rem 0.5rem;
    text-transform: capitalize;
    transition: var(--transitions);
    justify-content: space-between;
    border: 2px solid var(--clr-darkgray);
    background-color: var(--bg-black-color);
  }

  .sub_title {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .num {
    color: blue;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .task {
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--clr-darkgreen);
  }

  /* =========================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.6rem;
    }

    :is(.sub_title, .num) {
      font-size: 1.1rem;
    }

    :is(.task) {
      font-size: 1rem;
    }
  }
`;

export default Task;
