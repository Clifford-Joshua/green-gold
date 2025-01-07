import React from "react";
import styled from "styled-components";

const LoginFormRow = ({ type, name, value, placeholder, handleChange }) => {
  return (
    <Wrapper>
      <div className="form_input">
        <input
          type={type}
          name={name}
          value={value}
          className="form_row"
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================ */
  /* Mobile View */

  .form_input {
    gap: 1rem;
    display: flex;
    align-items: center;
  }

  .form_row {
    width: 85%;
    color: gray;
    height: 50px;
    margin: auto;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: var(--clr-form-box-shadow-gray);
  }

  .check_icon {
    display: flex;
    cursor: pointer;
    font-size: 1.6rem;
    align-items: center;
    color: var(--clr-darkgray);
  }
  /* ============================ */

  /* ============================ */
  /* Ipad View */
  @media screen and (764px <= width <= 1023px) {
    .form_row {
      width: 70%;
      height: 60px;
      font-size: 1.2rem;
    }
  }
  /* ============================ */

  /* ============================ */
  /* Desktop View */
  @media screen and (width>= 1023px) {
    .form_row {
      width: 80%;
      height: 40px;
    }

    .check_icon {
      font-size: 1.2rem;
    }
  }
`;
export default LoginFormRow;
