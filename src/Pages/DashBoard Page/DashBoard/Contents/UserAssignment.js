import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkAssignment } from "../../../../Shared/Features/UserSlice";

const UserAssignment = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="assignment_container">
        <div className="title_container">
          <h2 className="title">My Assignment</h2>
          <Link
            className="btn btn-outline-success"
            onClick={() => {
              dispatch(checkAssignment());
            }}
          >
            view more
          </Link>
        </div>

        <div className="assignment_details">
          <div className="assignment">
            <div className="name">
              <h2 className="sub_title">Python test</h2>
              <p className="text">10:30am</p>
            </div>
            <div className="score">
              <h2 className="num">190/200</h2>
              <p className="text">Final Grade</p>
            </div>
            <h4 className="task">Completed</h4>
          </div>

          <div className="assignment">
            <div className="name">
              <h2 className="sub_title">web dev test</h2>
              <p className="text">10:30am</p>
            </div>
            <div className="score">
              <h2 className="num">180/200</h2>
              <p className="text">Final Grade</p>
            </div>
            <h4 className="task">Completed</h4>
          </div>

          <div className="assignment">
            <div className="name">
              <h2 className="sub_title">JavaSc test</h2>
              <p className="text">10:30am</p>
            </div>
            <div className="score">
              <h2 className="num">__/200</h2>
              <p className="text">Final Grade</p>
            </div>
            <h4 className="task text-danger">up Coming</h4>
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

  .title_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: capitalize;
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
    font-size: 1rem;
    font-weight: 600;
  }

  .num {
    color: blue;
    font-size: 1rem;
    font-weight: 600;
  }

  .text {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--clr-darkgray);
  }

  .task {
    font-weight: 600;
    font-size: 0.9rem;
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

    :is(.text, .task) {
      font-size: 1rem;
    }
  }
`;

export default UserAssignment;
