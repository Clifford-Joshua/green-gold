import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { upDateNav } from "../../Features/NavSlice";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
const BarIcon = () => {
  const dispatch = useDispatch();
  const { isNavOpen } = useSelector((store) => store.mobileNav);

  return (
    <Wrapper>
      {isNavOpen ? (
        <div className="mobile_bar_icon" onClick={() => dispatch(upDateNav())}>
          <div className="icon">
            <HiOutlineBars3BottomRight />
          </div>
          <h3 className="menu">cancel</h3>
        </div>
      ) : (
        <div className="mobile_bar_icon" onClick={() => dispatch(upDateNav())}>
          <div className="icon">
            <HiOutlineBars3BottomRight />
          </div>
          <h3 className="menu">Menu</h3>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================== */
  /* Mobile View */

  .mobile_bar_icon {
    gap: 0.5rem;
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    align-items: center;
    color: var(--clr-darkgreen);
    transition: var(--transitions);
  }

  .mobile_bar_icon:hover {
    color: white;
    background-color: #06511c;
  }

  .icon {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
  }

  .menu {
    text-transform: capitalize;
  }
  /* ======================================= */

  /* =================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    display: none;
  }
`;
export default BarIcon;
