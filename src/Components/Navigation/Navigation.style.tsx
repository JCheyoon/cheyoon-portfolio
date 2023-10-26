import styled from "styled-components";
import { ReactComponent as DarkMode } from "../../Assets/darkMode.svg";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--font-color);
  height: 55px;
  padding-top: 25px;
  background-color: var(--bg-color);
  top: 0;
  position: fixed;
  z-index: 10;
`;
export const Navbar = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
`;

export const EmptyDiv = styled.div`
  display: none;
  align-items: center;
  flex-grow: 3;
  padding: 10px 35px;
  @media (min-width: 460px) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;

  svg {
    width: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const DarkModeBtn = styled.button`
  background: none;
  color: var(--font-color);
  border: none;
`;

export const DarkModeIcon = styled(DarkMode)`
  width: 30px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 460px) {
    width: 50px;
    padding: 10px 20px;
  }

  &:hover {
    color: var(--primary-color);
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LanguageBtn = styled.button`
  background: none;
  color: var(--font-color);
  border: none;
  font-family: "Poppins", "Noto Sans KR", sans-serif;
  padding: 2px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &.selected {
    color: var(--primary-color);
  }
  &:hover {
    color: var(--secondary-color);
  }
`;

export const LanguageBtnDivider = styled.span`
  color: var(--font-color);
`;
export const MyNavLink = styled(NavLink)`
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--font-color);
  text-decoration: none;
  transition: ease-in 200ms;
  font-size: 16px;

  @media (min-width: 460px) {
    padding: 10px 20px;
  }

  span {
    margin-left: 7px;
    font-family: "Poppins", sans-serif;
  }

  &:hover {
    color: var(--primary-color);
  }
  &.active {
    color: var(--primary-color);
  }
`;
