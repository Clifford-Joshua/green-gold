import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarLink } from "../../../Utils/ProfileNavSidebar";
const DesktopSidebar = () => {
  return (
    <Wrapper>
      <div className="link_container">
        {SidebarLink.map(({ name, icon, link }, index) => {
          return (
            <Link to={link} className="links" key={index}>
              <p className="icon">{icon}</p>
              <h2>{name}</h2>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================== */
  /* Mobile View */
  display: none;

  /* ========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    /* top: 0; */
    /* left: 0; */
    width: 100%;
    color: white;
    height: 100vh;
    display: block;
    /* position: fixed; */
    background: black;
    padding-top: 5rem;
    background: var(--clr-gradient-color);

    .link_container {
      gap: 2rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }

    .links {
      gap: 1rem;
      display: flex;
      padding: 1rem 0;
      font-weight: 700;
      font-size: 1.5rem;
      border-radius: 10px;
      align-items: center;
      color: var(--black-color);
      text-transform: capitalize;
      transition: var(--transitions);
    }

    .links:hover {
      text-align: center;
      justify-content: center;
      border: 2px solid var(--black-color);
      background-color: var(--bg-black-color);
    }

    .icon {
      display: flex;
      font-size: 1.8rem;
      align-items: center;
      color: var(--black-color) !important;
    }
  }
`;

export default DesktopSidebar;
