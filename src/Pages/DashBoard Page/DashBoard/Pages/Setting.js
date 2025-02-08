import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import ScrollToTop from "../../../../ScrollToTop";
import { useNavigate } from "react-router-dom";
const Setting = () => {
  const navigate = useNavigate();

  const Storage = localStorage.getItem("userStorage")
    ? JSON.parse(localStorage.getItem("userStorage"))
    : "";

  let { passWordStorage, userNameStorage } = Storage;

  const [userDetails, setUserDetails] = useState({
    userName: "",
    userPassword: "",
    NewUserPassword: "",
  });

  const handleUser = (e) => {
    e.preventDefault();

    if (!passWordStorage || !userNameStorage) {
      toast.error("Storage is not properly initialized. Please Sign Up");
      return;
    }

    const userIndex = passWordStorage.findIndex(
      (password) => password === userDetails.userPassword
    );

    if (userIndex === -1) {
      toast.error("Incorrect Old Password");
      return;
    }

    let updatedStorage = { ...Storage };

    // Update the password and username at the found index
    updatedStorage.passWordStorage[userIndex] = userDetails.NewUserPassword;
    updatedStorage.userNameStorage[userIndex] = userDetails.userName;

    localStorage.setItem("CurrentUserName", userDetails.userName);

    localStorage.setItem("userStorage", JSON.stringify(updatedStorage));

    toast.success("User details updated successfully!");

    navigate("/profile");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserDetails({ ...userDetails, [e.target.name]: value });
  };

  const handleCourse = () => {
    toast.success("Course Updated");

    navigate("/");
  };

  return (
    <Wrapper>
      <ScrollToTop />

      <div className="setting_container">
        <h2 className="title">Settings</h2>

        <form className="user_form" onSubmit={handleUser}>
          <h2 className="sub_title">Profile Settings</h2>

          <div className="input_holder">
            <div className="input_container">
              <label htmlFor="username">New Username</label>
              <input
                type="text"
                name="userName"
                id="username"
                onChange={handleChange}
                value={userDetails.userName}
                placeholder="Enter new Username"
              />
            </div>

            <div className="input_container">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="input_container">
              <label htmlFor="date">Date of birth</label>
              <input type="date" name="date of birth" id="date" />
            </div>

            <div className="input_container">
              <label htmlFor="password">old password</label>
              <input
                type="text"
                id="password"
                name="userPassword"
                onChange={handleChange}
                value={userDetails.userPassword}
                placeholder="Enter previous password"
              />
            </div>

            <div className="input_container">
              <label htmlFor="password">new password</label>
              <input
                type="text"
                id="password"
                name="NewUserPassword"
                onChange={handleChange}
                placeholder="Enter new password"
                value={userDetails.NewUserPassword}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary text-capitalize"
          >
            save changes
          </button>
        </form>

        <h2 className="title">Course Preferences</h2>
        <form className="user_form" onSubmit={handleCourse}>
          <div className="input_container">
            <label htmlFor="course" className="sub_title">
              Current Courses :{" "}
            </label>

            <select name="course" id="course">
              <option value="Data Analytics">Data Analytics</option>

              <option value="DevOps Engineering">DevOps Engineering</option>

              <option value="Software Development (Python)">
                Software Development (Python)
              </option>

              <option value="Data Science">Data Science</option>

              <option value="Software Engineering">Software Engineering</option>

              <option value="UI UX Design">UI UX Design</option>

              <option value="Frontend Development">Frontend Development</option>

              <option value="Backend Development">Backend Development</option>

              <option value="Cyber Security">Cyber Security</option>

              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
            </select>

            <button
              type="submit"
              className="btn btn-outline-primary text-capitalize"
            >
              Update course
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */
  padding-block: 3rem;
  padding-bottom: 1rem;

  .setting_container {
    gap: 1.5rem;
    display: flex;
    padding: 1rem 0.7rem;
    flex-direction: column;
    color: var(--black-color);
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .title {
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .user_form {
    gap: 1.5rem;
    display: grid;
    border-radius: 10px;
    padding: 0.9rem 0.4rem;
    color: var(--clr-charcoal-color);
    background-color: var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .input_holder {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .sub_title {
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .input_container {
    gap: 0.6rem;
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 700;
    text-transform: capitalize;
  }

  :is(input, select) {
    padding: 0.6rem;
    font-size: 0.9rem;
    border-radius: 8px;
    color: var(--clr-darkgray);
    border: 1px solid var(--black-color);
  }

  input:focus {
    color: black;
  }

  /* ==================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    label {
      font-size: 1.1rem;
    }

    :is(input, select, .btn) {
      font-size: 1rem;
    }

    .user_form {
      padding: 1rem;
    }
  }
`;

export default Setting;
