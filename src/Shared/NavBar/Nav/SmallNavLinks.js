import React from "react";
import Theme from "./Theme";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Links } from "../../../Utils/NavLink";
import { closeNav } from "../../Features/NavSlice";
import {
  // FaUserAltSlash,
  // FaUserGraduate,
  FaUserCircle,
  FaUserEdit,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
const SmallNavLinks = () => {
  const dispatch = useDispatch();
  const { isNavOpen } = useSelector((store) => store.mobileNav);

  return (
    <Wrapper>
      <div className={`container ${isNavOpen && "showNav"}`}>
        <div className="nav_links_container">
          {Links.map(({ link, icon, name }, index) => {
            return (
              <NavLink
                to={link}
                key={index}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={() => dispatch(closeNav())}
              >
                <div className="icon">{icon}</div>
                <h3 className="link_name">{name}</h3>
              </NavLink>
            );
          })}

          {/* show profile div on condition */}
          <Link
            to={"/profile"}
            className="profile_link"
            onClick={() => dispatch(closeNav())}
          >
            <div className="icon">
              {" "}
              <FaUserCircle />{" "}
            </div>
            <h3 className="link_name">my profile</h3>
          </Link>

          {/* Show login signin or logout  */}
          <div className="register_login_container">
            <Link to={"/signup"} className="sign_up">
              <div className="icon">
                <FaUserEdit />
              </div>

              <h4 className="link_name">sign up</h4>
            </Link>

            {/* <Link to={"/login"} className="login">
              <div className="icon">
                <FaUserGraduate />
              </div>
              <h4 className="link_name">login</h4>
            </Link> */}

            {/* <button className="login">
            <div className="icon">
              <FaUserAltSlash />
            </div>
            <h4 className="link_name">logout</h4>
          </button> */}
          </div>

          {/* Theme day or Night */}
          <Theme />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================== */
  /* Mobile View */

  .container {
    right: 0;
    top: 100%;
    height: 0;
    width: 100%;
    overflow: hidden;
    position: absolute;
    transition: var(--transitions);
    background-color: var(--bg-black-color);
  }

  .showNav {
    padding: 1rem;
    height: calc(100vh - 12vh);
  }

  .nav_links_container {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .link {
    gap: 0.5rem;
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--clr-darkgreen);
    transition: var(--transitions);
  }

  :is(.login, .sign_up, .link):hover {
    color: white;
    background-color: #06511c;
  }

  .icon {
    display: flex;
    font-size: 1.3rem;
    align-items: center;
  }

  .link_name {
    font-size: 1.2rem;
  }

  :is(.login, .sign_up) {
    width: 45%;
    gap: 0.5rem;
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    border-radius: 10px;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    color: var(--clr-darkgreen);
    background-color: transparent;
    transition: var(--transitions);
    border: 2px solid var(--clr-darkgray);
  }

  .profile_link {
    gap: 0.6rem;
    color: white;
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    border: 2px solid green;
    text-transform: capitalize;
    background: linear-gradient(to right, #097629 5%, #947b00);
  }

  /* ======================================= */

  /* ==================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .link {
      gap: 1.5rem;
      padding: 0.8rem;
    }

    .icon {
      font-size: 1.5rem;
    }

    .link_name {
      font-size: 1.5rem;
    }
  }
  /* ======================================= */

  /* =================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    display: none;
  }
`;

export default SmallNavLinks;
