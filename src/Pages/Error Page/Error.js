import React from "react";
import styled from "styled-components";
import ErrorImg from "../../Assets/undraw_page-not-found_6wni.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <h2 className="title">404 Error </h2>
      <p className="sub_text">Page not found</p>
      <Link to={"/"} className="btn btn-info text-dark fw-bolder">
        GO Back To Home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${ErrorImg}) center/cover, no-repeat;
  background-color: lightgray;

  .title {
    font-size: 4rem;
    font-weight: 700;
  }

  .sub_text {
    font-size: 1.5rem;
  }
`;

export default Error;
