import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SuccessImg from "../../Assets/Submit.svg";

const Submit = () => {
  useEffect(() => {
    toast.success("Form Submitted");
  }, []);
  return (
    <Wrapper>
      <h2 className="title">Form Submitted </h2>
      <p className="sub_text">We get back to you as soon as possible</p>
      <Link to={"/"} className="btn btn-info text-dark fw-bolder">
        GO Back To Home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  gap: 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${SuccessImg}) center/cover, no-repeat;
  background-color: lightgray;

  .title {
    font-size: 4rem;
    font-weight: 700;
  }

  .sub_text {
    font-size: 1.5rem;
    text-shadow: 2px 2px 2px blue;
  }
`;

export default Submit;
