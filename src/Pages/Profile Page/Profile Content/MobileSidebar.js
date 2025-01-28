import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarLink } from "../../../Utils/ProfileNavSidebar";
const MobileSidebar = () => {
  const { isSideNavOpen } = useSelector((store) => store.mobileNav);

  return (
    <Wrapper>
      <div className={`sidebar_container ${isSideNavOpen && "show"}`}>
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================== */
  /* Mobile View */
  .sidebar_container {
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    position: fixed;
    padding-top: 8rem;
    border: 2px solid blue;
    transform: translate(-150%);
    transition: var(--transitions);
    background: var(--clr-gradient-color);
  }

  .link_container {
    gap: 1.4rem;
    display: flex;
    flex-direction: column;
  }

  .links {
    gap: 1rem;
    display: flex;
    padding: 1rem 0;
    font-weight: 700;
    font-size: 1.4rem;
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

  .show {
    transform: translate(0%);
  }

  @media screen and (width >=763px) {
    .icon {
      font-size: 2rem;
    }
  }

  /* ========================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    display: none;
  }
`;

export default MobileSidebar;
