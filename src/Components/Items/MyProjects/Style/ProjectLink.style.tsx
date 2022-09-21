import styled from "styled-components";

export const ProjectLinkStyle = styled.div`
  margin: 0;

  a {
    width: 105px;
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: ease 100ms;

    &:hover {
      color: var(--font-color);
    }
  }
`;
