import styled from "styled-components";

export const ProjectHeaderStyle = styled.h1`
  margin: 0;
`;
export const ProjectTags = styled.div`
  font-size: 16px;
  color: var(--both-white);
  margin: 20px 0;

  span {
    background-color: var(--primary-color);
    padding: 5px 10px;
    margin-right: 10px;
  }
`;

export const ProjectImage = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 300px) {
    width: 300px;
    height: 200px;
  }
  @media (min-width: 470px) {
    width: 440px;
    height: 220px;
  }

  @media (min-width: 660px) {
    width: 640px;
    height: 320px;
  }
`;
