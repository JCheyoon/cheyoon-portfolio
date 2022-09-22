import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 105px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;

  @media (min-width: 520px) {
    margin-bottom: 0;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: normal;
    margin-top: 0;
  }
`;

export const PicContainer = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  background-image: url("/cheyoon.png");
  border-radius: 5px;
  margin-bottom: 20px;

  @media (min-width: 800px) {
    width: 300px;
    height: 300px;
    margin-bottom: 0;
  }
`;
export const TextContainer = styled.div`
  padding-left: 30px;
  width: 280px;

  @media (min-width: 800px) {
    padding-left: 100px;
    width: 400px;
  }

  h1 {
    font-size: 32px;
    margin: 0;
    span {
      padding-right: 10px;

      &.firstName {
        color: var(--primary-color);
      }
    }
  }

  p {
    font-size: 15px;
  }
`;

export const BorderBox = styled.div`
  border-bottom: 1px solid var(--secondary-color);
  margin-top: 30px;
  margin-bottom: 30px;
`;
