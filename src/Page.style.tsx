import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 105px);
  overflow: auto;
  padding-top: 105px;
  animation: move 200ms ease;
  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes move {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  color: var(--font-color);
  background-color: var(--primary-color);
  text-align: center;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--font-color);
    color: var(--primary-color);
  }
`;
