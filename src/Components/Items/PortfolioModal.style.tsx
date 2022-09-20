import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalContent = styled.div`
  position: absolute;
  background: red;
  padding: 2.5rem;
  overflow: auto;
  width: 800px;
  height: 700px;
  z-index: 11;
`;
