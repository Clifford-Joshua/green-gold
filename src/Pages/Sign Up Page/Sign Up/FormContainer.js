import Policy from "./Policy";
import { toast } from "react-toastify";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PasswordCheckers from "./PasswordCheckers";
import FormRow from "../../../Shared/Components/FormRow";
import { Checkers } from "../../../Utils/PasswordCheckers";
import { FaRegCheckCircle, FaEyeSlash, FaEye } from "react-icons/fa";

import { useDispatch } from "react-redux";

import {
  checkName,
  checkEmail,
  checkUserName,
  checkPassWord,
  checkConfirmPassWord,
  checkNumber,
} from "../../../Shared/Features/UserSlice";

import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const {
    name,
    email,
    number,
    username,
    password,
    confirmPassword,
    isName,
    isEmail,
    isUserName,
    isPassWord,
    isNumber,
    isConfirmPassWord,
  } = useSelector((store) => store.user);
  const [userDetails, setUserDetails] = useState({
    name,
    email,
    username,
    password,
    number,
    confirmPassword,
  });
  const [isCheck, setIsCheck] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const Storage = JSON.parse(localStorage.getItem("userStorage"));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initialState = {
    userNameStorage: [],
    passWordStorage: [],
  };

  const [allUsers, setAllUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userDetails.confirmPassword ||
      !userDetails.email ||
      !userDetails.name ||
      !userDetails.number ||
      !userDetails.password ||
      !userDetails.username
    ) {
      toast.error("Please Fill Out  All Field");
      return;
    }

    if (!isCheck || !isPolicy) {
      toast.error("Please Agree To Our Policy and Market Content");
      return;
    }

    // Check if the username and password are already taken
    const usernameExists = allUsers.userNameStorage.includes(
      userDetails.username
    );
    const passwordExists = allUsers.passWordStorage.includes(
      userDetails.password
    );

    if (usernameExists) {
      toast.error("Username Already Taken");
      return; // Exit the function early if the username exists
    }

    if (passwordExists) {
      toast.error("Password Already Taken");
      return; // Exit the function early if the password exists
    }

    // name checked
    if (userDetails.name.length < 6) {
      toast.error("please input your name and surname in the name field");
      return;
    }

    // username length check
    if (userDetails.username.length < 2) {
      toast.error("invalid username");
      return;
    }

    // Email @ check
    if (!userDetails.email.includes("@")) {
      toast.error("invalid Email missing @");
      return;
    }

    // valid Number check
    if (userDetails.number.length !== 11 || userDetails.number.length > 11) {
      toast.error("invalid number");
    }

    // confirmPassword check
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("password and confirm password doesn't match");
      return;
    }

    // Password checker check

    // lowercase character
    let lowercase = /[a-z]/;

    // Uppercase character
    let Uppercase = /[A-Z]/;

    // number character
    let numbers = /[0-9]/;

    // special character
    let special = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (
      !lowercase.test(userDetails.password) ||
      !Uppercase.test(userDetails.password) ||
      !numbers.test(userDetails.password) ||
      !special.test(userDetails.password) ||
      userDetails.password.length < 5
    ) {
      toast.error("password too weak ");
      return;
    }

    // Update state with new username and password
    setAllUser((prevAllUsers) => ({
      userNameStorage: [...prevAllUsers.userNameStorage, userDetails.username],
      passWordStorage: [...prevAllUsers.passWordStorage, userDetails.password],
    }));

    setIsTrue(!isTrue);

    setUserDetails({
      ...userDetails,
      name,
      email,
      number,
      username,
      password,
      confirmPassword,
    });

    navigate("/login");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserDetails({ ...userDetails, [e.target.name]: value });
  };

  // function for policy check
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  // function for policy check
  const handlePolicy = () => {
    setIsPolicy(!isPolicy);
  };

  useEffect(() => {
    // name checked
    if (userDetails.name.length > 6) {
      dispatch(checkName(true));
    } else {
      dispatch(checkName(false));
    }

    // username
    if (userDetails.username.length > 2) {
      dispatch(checkUserName(true));
    } else {
      dispatch(checkUserName(false));
    }

    // Email
    if (userDetails.email.includes("@")) {
      dispatch(checkEmail(true));
    } else {
      dispatch(checkEmail(false));
    }

    // Number
    if (userDetails.number.length === 11) {
      dispatch(checkNumber(true));
    } else {
      dispatch(checkNumber(false));
    }

    // confirmPassword
    if (userDetails.password === userDetails.confirmPassword) {
      dispatch(checkConfirmPassWord(true));
    } else {
      dispatch(checkConfirmPassWord(false));
    }

    // Password
    // lowercase character
    let lowercase = /[a-z]/;
    // Uppercase character
    let Uppercase = /[A-Z]/;
    // number character
    let numbers = /[0-9]/;
    // special character
    let special = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (
      lowercase.test(userDetails.password) ||
      Uppercase.test(userDetails.password) ||
      numbers.test(userDetails.password) ||
      special.test(userDetails.password) ||
      userDetails.password.length > 5
    ) {
      dispatch(checkPassWord(true));
    } else {
      dispatch(checkPassWord(false));
    }

    // eslint-disable-next-line
  }, [userDetails]);

  // run use effect only when all user changes save user detail in local storage
  useEffect(() => {
    // setting up local storage
    if (isTrue) {
      localStorage.setItem("userStorage", JSON.stringify(allUsers));
    }
  }, [allUsers, isTrue]);

  useEffect(() => {
    setAllUser((prevState) => ({
      ...prevState,
      ...Storage,
    }));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormRow
          type="text"
          name="username"
          placeholder="username"
          handleChange={handleChange}
          value={userDetails.username}
          icon={<FaRegCheckCircle className={`${isUserName && "checked"}`} />}
        />

        <FormRow
          type="text"
          name="name"
          placeholder="names"
          handleChange={handleChange}
          value={userDetails.name}
          icon={<FaRegCheckCircle className={`${isName && "checked"}`} />}
        />

        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={userDetails.email}
          placeholder="mail@gmail.com"
          icon={<FaRegCheckCircle className={`${isEmail && "checked"}`} />}
        />

        <FormRow
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          placeholder="password"
          handleChange={handleChange}
          value={userDetails.password}
          icon={
            showPassword ? (
              <FaEye
                className={`${isPassWord && "checked"}`}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className={`${isPassWord && "checked"}`}
                onClick={() => setShowPassword(!showPassword)}
              />
            )
          }
        />

        <div className="Password_Checker_Container">
          {Checkers.map(({ CheckerIcon, CheckerName }, index) => {
            return (
              <PasswordCheckers
                CheckerIcon={CheckerIcon}
                CheckerName={CheckerName}
                key={index}
                checkPassWord={isPassWord}
              />
            );
          })}
        </div>

        <FormRow
          type={`${showConfirmPassword ? "text" : "password"}`}
          name="confirmPassword"
          handleChange={handleChange}
          placeholder="confirm password"
          value={userDetails.confirmPassword}
          icon={
            showConfirmPassword ? (
              <FaEye
                className={`${isConfirmPassWord && "checked"}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <FaEyeSlash
                className={`${isConfirmPassWord && "checked"}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )
          }
        />

        <FormRow
          type="tel"
          name="number"
          value={userDetails.number}
          handleChange={handleChange}
          placeholder="+234 825 453 5434"
          icon={<FaRegCheckCircle className={`${isNumber && "checked"}`} />}
        />

        <Policy handleCheck={handleCheck} handlePolicy={handlePolicy} />

        <button type="submit" className="submit_btn" onClick={handleSubmit}>
          Create account
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================== */
  /* Mobile View */
  width: 100%;
  padding-block: 1rem;

  form {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .checked {
    color: var(--clr-darkgreen);
  }

  .Password_Checker_Container {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .submit_btn {
    color: white;
    padding: 0.4rem;
    border-radius: 10px;
    background-color: #ea3939;
  }

  .submit_btn:hover {
    background-color: #ff0f0f;
  }

  /* =================================== */

  /* =================================== */
  /* Ipad View */
  @media screen and (764px <= width <= 1023px) {
    form {
      gap: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  /* =================================== */

  /* =================================== */
  /* Desktop View */
  @media screen and (width>= 1023px) {
    width: 70%;
  }
`;
export default FormContainer;
