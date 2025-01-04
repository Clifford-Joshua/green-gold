import React from "react";
import styled from "styled-components";
const Policy = ({ handleCheck, handlePolicy }) => {
  return (
    <Wrapper>
      <div className="policy_container" onClick={() => handlePolicy()}>
        <button>
          <input type="checkbox" className="checkbox" />
        </button>
        <p className="policy">
          i have read and agree to the{"  "}
          <span className="text-danger fw-bold"> private policy</span>
          {"  "}
        </p>
      </div>
      <div className="policy_container" onClick={() => handleCheck()}>
        <button>
          <input type="checkbox" className="checkbox" />
        </button>
        <p className="policy">
          I agree to receiving{"  "}
          <span className="text-danger fw-bold"> Marketing Content</span>
          {"  "}
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =================================== */
  /* Mobile View */
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  .policy_container {
    gap: 0.5rem;
    display: flex;
    min-height: 10px;
    align-items: center;
  }

  button {
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox {
    width: 20px;
    height: 20px;
  }

  .policy {
    margin: 0;
    font-size: 1rem;
    color: var(--black-color);
    text-transform: capitalize;
  }
`;
export default Policy;
