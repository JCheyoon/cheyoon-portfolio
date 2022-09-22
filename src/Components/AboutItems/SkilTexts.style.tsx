import styled from "styled-components";

export const SkillTextsContainer = styled.ul`
  border-top: 1px solid var(--font-color-light);
  color: var(--font-color);
  list-style: none;
  padding-left: 0;
  li {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 180px;
      padding: 10px 15px;
      margin-top: 5px;

      @media (min-width: 430px) {
        width: 150px;
      }

      &.des {
        width: 150px;

        @media (min-width: 430px) {
          width: 200px;
        }
      }
    }
    span {
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      &.tech {
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        background-color: var(--item-color);
        padding: 5px 20px;
        border-radius: 50px;
      }
    }
  }
  & li::before {
    content: "";
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 50%;
    @media (min-width: 430px) {
      width: 12px;
    }

    @media (min-width: 800px) {
      width: 10px;
    }
  }
`;
