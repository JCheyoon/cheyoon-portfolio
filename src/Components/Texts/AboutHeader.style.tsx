import styled from "styled-components";

export const Mytext = styled.h1`
  margin: 0;
  font-size: 18px;
  padding: 10px 5px 0;

  span {
    padding-right: 5px;

    &.emphasize {
      color: var(--primary-color);
    }
  }
`;
