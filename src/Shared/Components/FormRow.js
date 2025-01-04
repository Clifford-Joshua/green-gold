import React from "react";
import styled from "styled-components";

const FormRow = ({ type, name, value, placeholder, icon, handleChange }) => {
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
        <div className="check_icon" title="Hide">
          {icon}
        </div>
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
    width: 90%;
    color: gray;
    height: 40px;
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
    align-self: center;
  }
  /* ============================ */

  /* ============================ */
  /* Desktop View */
  @media screen and (width>= 1023px) {
    .form_row {
      width: 90%;
    }

    .check_icon {
      font-size: 1.2rem;
    }
  }
`;
export default FormRow;
