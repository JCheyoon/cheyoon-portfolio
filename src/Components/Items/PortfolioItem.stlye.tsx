import styled from "styled-components";

export const ItemWrapper = styled.div<{ imgUrl: string }>`
  width: 230px;
  height: 230px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  overflow: hidden;

  &:hover {
    > div {
      transform: translateY(0px);
    }
  }
`;

export const Description = styled.div`
  background-color: var(--bg-transparent);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  transform: translateY(140px);
  transition: all ease-in 200ms;

  h1 {
    font-size: 24px;
    border: none;
    margin: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
    font-family: Monserrat sans-serif;
    font-size: 18px;
    margin-bottom: 10px;

    p {
      margin: 3px;
    }
  }
`;
