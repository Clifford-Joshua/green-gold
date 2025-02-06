import React from "react";
import styled from "styled-components";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
const Sidebar = () => {
  return (
    <Wrapper>
      <DesktopSidebar />
      <MobileSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================= */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 28%;
    height: 100%;
    /* position: relative; */
  }
`;

export default Sidebar;
