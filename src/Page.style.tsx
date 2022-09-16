import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 5px);
  align-items: center;
  overflow-y: auto;

  @media (min-width: 376px) {
    height: calc(100vh - 80px);
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
