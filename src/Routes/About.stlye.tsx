import styled from "styled-components";

export const AboutBox = styled.div`
  height: calc(100vh - 105px);
  display: flex;
  align-items: center;
  margin-bottom: -60px;
  @media (min-width: 520px) {
    margin-bottom: 0;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  margin-top: 700px;
  flex-direction: column;
  background-color: var(--bg-light-color);
  border-radius: 10px;
  align-items: center;

  @media (min-width: 800px) {
    margin-top: 0;
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Pic = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  background-image: url("/cheyoon.png");
  border-radius: 50%;
  margin-top: 10px;
`;

export const InfoContainer = styled.div`
  width: 200px;
  height: 500px;
  border-right: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;

  @media (min-width: 430px) {
    width: 250px;
  }

  @media (min-width: 800px) {
    border-right: 1px solid var(--font-color-light);
    height: 600px;
  }
`;

export const SkillContainer = styled.div`
  width: 300px;
  padding: 10px 20px;
  font-size: 15px;

  @media (min-width: 430px) {
    width: 350px;
  }
  @media (min-width: 800px) {
    width: 450px;
  }
`;

export const OtherSkills = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  li {
    svg {
      width: 40px;
      height: 40px;
      padding-right: 10px;
    }
  }
`;
