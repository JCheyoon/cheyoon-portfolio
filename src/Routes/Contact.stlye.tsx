import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 105px);
  width: 800px;

  @media (min-width: 800px) {
    padding: 20px 0;
    margin-top: 0;
  }
  h1 {
    font-size: 30px;
    color: var(--font-color);
    border-bottom: 1px solid var(--font-color-light);
    padding: 20px 10px;
  }
`;
export const ContactSection = styled.div`
  display: flex;
  background: none;
  margin-bottom: 10px;
`;

export const MapAndItemDiv = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    align-items: normal;
  }
`;
export const MapDiv = styled.div`
  padding-top: 20px;
  position: relative;
  padding-bottom: 50%;
  padding-right: 80%;
  height: 0;
  overflow: hidden;

  @media (min-width: 620px) {
    justify-content: normal;
    padding-right: 0;
    width: 600px;
  }

  @media (min-width: 800px) {
    width: 800px;
    padding-right: 0;
    padding-bottom: 50%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ContactItems = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-right: 15px;
`;

export const ContactIcon = styled.a`
  text-decoration: none;
  color: var(--font-color);
  transition: 200ms ease-in;

  &:hover {
    color: var(--primary-color);
    transform: scale(1.1);
  }

  i {
    font-size: 40px;
  }
  svg {
    width: 40px !important;
    height: 40px !important;
  }
`;
