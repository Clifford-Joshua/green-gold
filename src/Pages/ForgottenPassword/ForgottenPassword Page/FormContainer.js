import React, { useState } from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormRow from "../../../Shared/Components/LoginFormRow";
const FormContainer = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserDetails({ ...userDetails, [e.target.name]: value });
  };

  const Storage = JSON.parse(localStorage.getItem("userStorage"));

  const { userNameStorage, passWordStorage } = Storage;

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUserName = userNameStorage.find(
      (name) => userDetails.userName === name
    );

    const userIndex = userNameStorage.findIndex(
      (name) => userDetails.userName === name
    );

    // set user password dynamically
    setUserDetails({
      ...userDetails,
      userPassword: passWordStorage[userIndex],
    });

    const checkUserPassWord =
      passWordStorage[userIndex] === userDetails.userPassword;

    // look for the exact username if username does not exist don't login
    if (!checkUserName) {
      toast.error("UserName does not exist");
      return;
    }

    if (!userDetails.userPassword) {
      return;
    }

    // look for the exact password if password is incorrect  don't login
    if (!checkUserPassWord) {
      toast.error("Incorrect Password");
      return;
    }

    navigate("/profile");
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <FormRow
          type={"text"}
          name={"userName"}
          placeholder={"userName"}
          handleChange={handleChange}
          value={userDetails.userName}
        />
        <FormRow
          type={"password"}
          name={"userPassword"}
          placeholder={"password"}
          handleChange={handleChange}
          value={userDetails.userPassword}
        />

        <button className="login_btn" type="submit">
          login
        </button>

        <AccountInfo />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  width: 100%;

  .form {
    gap: 1.7rem;
    width: 100%;
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
  }

  .login_btn {
    width: 80%;
    margin: auto;
    color: white;
    cursor: pointer;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 0.4rem 0.6rem;
    text-transform: uppercase;
    box-shadow: var(--clr-form-box-shadow-gray);
    background: linear-gradient(to right, #097629 5%, #947b00);
  }

  /* =================================================== */
  /* Ipad View */
  @media screen and (764px<= width <= 1023px) {
    .login_btn {
      width: 70%;
    }
  }

  /* =================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 80%;

    .form {
      gap: 1rem;
    }

    .login_btn {
      width: 70%;
      font-size: 1rem;
      padding: 0.4rem;
    }
  }
`;

export default FormContainer;
