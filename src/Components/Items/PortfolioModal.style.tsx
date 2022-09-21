import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  background: var(--bg-light-color);
  padding: 3rem;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  z-index: 11;
  cursor: move;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    padding: 2.5rem;
    top: 6.5rem;
    width: 800px;
    height: 700px;
  }
`;

export const ModalBtn = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--both-white);
  cursor: pointer;
  span {
    font-size: 50px;

    transition: ease 200ms;
    &:hover {
      transform: rotate(90deg);
      transform-origin: center;
    }
  }
`;
