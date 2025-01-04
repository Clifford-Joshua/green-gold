import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GetStorageTheme = () => {
  let theme = "Day";
  if (localStorage.getItem("THEME")) {
    theme = localStorage.getItem("THEME");
  }
  return theme;
};
const Theme = () => {
  const [PageTheme, setPageTheme] = useState(GetStorageTheme());

  useEffect(() => {
    document.documentElement.className = PageTheme;
    localStorage.setItem("THEME", PageTheme);
  }, [PageTheme]);

  const ThemeHandle = () => {
    if (PageTheme === "Day") {
      setPageTheme("Night");
    } else {
      setPageTheme("Day");
    }
  };

  return (
    <Wrapper onClick={() => ThemeHandle()}>
      <div className="circle_ball"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================== */
  /* Mobile View */
  width: 80px;
  height: 40px;
  cursor: pointer;
  border-radius: 50px;
  background: var(--theme-bcg-image);
  border: 2px solid var(--clr-darkgray);

  .circle_ball {
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    transform: var(--clr-theme-transform);
    box-shadow: var(--clr-box-shadow-gray);
  }
  /* ======================================= */

  /* ===================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    width: 100px;
    height: 50px;
  }

  /* ===================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 60px;
    height: 30px;
  }
`;

export default Theme;
