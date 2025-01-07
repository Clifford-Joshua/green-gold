import React from "react";
import styled from "styled-components";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Links } from "../../../Utils/NavLink";
import { useSelector } from "react-redux";

import {
  FaUserAltSlash,
  FaUserGraduate,
  FaUserCircle,
  FaUserEdit,
} from "react-icons/fa";
const NavLinks = () => {
  const { isUser, isLogin } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className="nav_links_container">
        {Links.map(({ icon, name, link }, index) => {
          return (
            <NavLink
              key={index}
              to={link}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <div className="icon">{icon}</div>
              <h3 className="link_name">{name}</h3>
            </NavLink>
          );
        })}

        <div className="register_login_container">
          {isUser ? (
            isLogin ? (
              <button className="login">
                <div className="icon">
                  <FaUserAltSlash />
                </div>
                <h4 className="link_name">logout</h4>
              </button>
            ) : (
              <Link to={"login"} className="login">
                <div className="icon">
                  <FaUserGraduate />
                </div>
                <h4 className="link_name">login</h4>
              </Link>
            )
          ) : (
            <Link to={"/signup"} className="sign_up">
              <div className="icon">
                <FaUserEdit />
              </div>

              <h4 className="link_name">sign up</h4>
            </Link>
          )}
        </div>

        <Theme />

        {/* show profile div on condition */}
        <Link to={"/profile"} className="profile_link">
          <div className="icon">
            {" "}
            <FaUserCircle />{" "}
          </div>
          <h3 className="link_name">my profile</h3>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================== */
  /* Mobile View */
  display: none;
  /* ======================================= */

  /* ====================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    display: block;

    /* ========================================== */
    /* Nav link Container  */
    .nav_links_container {
      gap: 1.5rem;
      display: flex;
      align-items: center;
    }

    /* ========================================== */
    /* link  */
    .link {
      gap: 1rem;
      display: flex;
      cursor: pointer;
      padding: 0.5rem;
      align-items: center;
      text-decoration: none;
      text-transform: capitalize;
      color: var(--clr-darkgreen);
      transition: var(--transitions);
    }

    /* ========================================== */
    /* link , login , sign up  hover effect*/
    :is(.login, .sign_up, .link):hover {
      color: white;
      background-color: #06511c;
    }

    /* ========================================== */
    /* icon */
    .icon {
      display: flex;
      font-size: 1.2rem;
      align-items: center;
    }

    /* ========================================== */
    /* link name */
    .link_name {
      font-size: 1rem;
    }

    /* ========================================== */
    /* login and sign up */
    :is(.login, .sign_up) {
      gap: 0.5rem;
      display: flex;
      cursor: pointer;
      padding: 0.4rem;
      align-items: center;
      border-radius: 10px;
      letter-spacing: 0.1rem;
      text-transform: capitalize;
      color: var(--clr-darkgreen);
      background-color: transparent;
      transition: var(--transitions);
      border: 2px solid var(--clr-darkgray);
    }

    /* ========================================== */
    /* profile link */
    .profile_link {
      gap: 0.6rem;
      color: white;
      display: flex;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 10px;
      align-items: center;
      border: 2px solid green;
      text-transform: capitalize;
      background: linear-gradient(to right, #097629 5%, #947b00);
    }
  }
`;

export default NavLinks;
