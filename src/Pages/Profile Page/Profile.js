import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, BodyContent } from "./Profile Content";
import { SideNav } from "../../Shared/Features/NavSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Profile = () => {
  const dispatch = useDispatch();
  const { isSideNavOpen } = useSelector((store) => store.mobileNav);

  return (
    <Wrapper>
      <div className="main_container">
        <Sidebar />
        <BodyContent />
      </div>

      <div
        className={`sideNavIcon ${isSideNavOpen && "right"}`}
        onClick={() => dispatch(SideNav())}
      >
        {isSideNavOpen ? (
          <FaArrowLeft className={`icon `} />
        ) : (
          <FaArrowRight className={`icon `} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =================================================== */
  /* Mobile View */
  width: 100%;
  display: flex;
  position: relative;
  padding-top: 5.3rem;
  align-items: center;
  justify-content: center;
  background: var(--general-bg);

  .main_container {
    display: flex;
    position: relative;
    justify-content: center;
  }

  .sideNavIcon {
    left: 0;
    top: 20.5%;
    z-index: 30;
    position: fixed;
    border-radius: 5px;
    padding: 0.4rem 0.7rem;
    transition: var(--transitions);
    background: linear-gradient(
        to bottom,
        #06511c,
        #06511dab,
        #06511d63,
        #947b00de,
        #947b00c6,
        #947b00
      ),
      #947b00;
  }

  .sideNavIcon:hover {
    background: black;
  }

  .icon {
    color: white;
    font-size: 1.3rem;
  }

  .right {
    right: 0;
    left: unset;
  }

  /* =================================================== */
  /* Ipad View */
  @media screen and (width >= 763px) {
    .main_container {
      width: 96%;
    }

    .sideNavIcon {
      top: 14.5%;
      padding: 0.9rem;
    }

    .icon {
      font-size: 1.5rem;
    }
  }

  /* =================================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    gap: 2rem;

    .main_container {
      width: 98%;
      justify-content: space-between;
    }

    .sideNavIcon {
      display: none;
    }
  }
`;

export default Profile;
