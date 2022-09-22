import styled from "styled-components";

export const MyCursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: var(--font-color);
  box-shadow: 0 0 20px var(--font-color);
  box-sizing: border-box;
  transition: 0.1s;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10;

  &.hovered {
    margin-left: -10px;
    margin-top: -10px;
    width: 40px;
    height: 40px;
    opacity: 0.5;
    box-shadow: none;
  }
`;
