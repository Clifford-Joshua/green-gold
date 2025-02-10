import React from "react";
import { Teacher, TeacherTittle } from "./Teachers Folder";
import styled from "styled-components";
const TeachersHolder = () => {
  return (
    <Wrapper>
      <TeacherTittle />

      <Teacher />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =============================================== */
  /* Mobile View */
  padding-block: 2rem;
  background-color: var(--clr-transparent-white);
`;

export default TeachersHolder;
