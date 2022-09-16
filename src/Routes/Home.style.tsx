import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 800px) {
    flex-wrap: nowrap;
    justify-content: normal;
  }
`;

export const PicContainer = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  background-image: url("/cheyoon.png");
  border-radius: 5px;
  margin-bottom: 20px;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`;
export const TextContainer = styled.div`
  padding-left: 0;
  width: 300px;

  @media (min-width: 520px) {
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
