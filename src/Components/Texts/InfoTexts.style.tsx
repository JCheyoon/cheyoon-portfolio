import styled from "styled-components";

export const InfoTextContainer = styled.ul`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  list-style: none;
  font-size: 14px;
  padding-left: 0;

  li {
    display: flex;
    align-items: center;
    margin-top: 7px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--font-color-light);

    span {
      padding-right: 10px;

      a {
        cursor: pointer;
        color: var(--font-color);
        text-decoration: none;

        &:hover {
          color: var(--secondary-color);
        }
      }

      i {
        color: var(--primary-color);
      }
      svg {
        color: var(--primary-color);
      }
    }
  }
`;
