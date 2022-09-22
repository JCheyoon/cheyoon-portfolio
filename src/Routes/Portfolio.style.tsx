import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: calc(100vh - 105px);
  align-items: center;
  margin-bottom: -40px;

  @media (min-width: 520px) {
    align-items: normal;
    margin-top: 120px;
    margin-bottom: 0;
  }
  @media (min-width: 800px) {
    padding: 20px 0;
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
    color: var(--font-color);
    border-bottom: 1px solid var(--font-color-light);
    padding: 20px 10px;
    margin-top: 30px;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 250px);
  grid-template-rows: repeat(6, 250px);
  align-items: center;
  grid-gap: 10px;
  padding: 2.5rem 0 1rem;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 520px) {
    grid-gap: 15px;
    align-items: center;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(3, 250px);
    margin-bottom: 0;
  }

  @media (min-width: 800px) {
    align-items: normal;
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: repeat(2, 250px);
  }
`;
