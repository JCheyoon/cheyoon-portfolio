import {
  LogoContainer,
  NavContainer,
  Navbar,
  MyNavLink,
  EmptyDiv,
  DarkModeIcon,
  DarkModeBtn,
  LanguageBtn,
  LanguageBtnDivider,
  LanguageContainer,
} from "./Navigation.style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { ReactComponent as LogoW } from "../../Assets/logo-w.svg";
import { ReactComponent as LogoB } from "../../Assets/logo-b.svg";

import { withCursor } from "../Cursor/withCursor";
import { useTranslation } from "react-i18next";

const NavLinkWithCursor = withCursor(MyNavLink);
const LinkWithCursor = withCursor(Link);
const DarkModeBtnWithCursor = withCursor(DarkModeBtn);
const LanguageBtnWithCursor = withCursor(LanguageBtn);
export const languages = ["en", "ko"];
export type Language = "en" | "ko";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const isLargeScreen = useMediaQuery("(min-width: 700px)");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const changeColorMode = (): void => {
    if (isDarkMode) {
      document.querySelector("body")?.classList.add("light");
      setIsDarkMode(false);
    } else if (!isDarkMode) {
      document.querySelector("body")?.classList.remove("light");
      setIsDarkMode(true);
    }
  };

  const handleChangeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavContainer>
      <Navbar>
        <LogoContainer>
          <LinkWithCursor to="/">
            {isDarkMode ? <LogoW /> : <LogoB />}
          </LinkWithCursor>
        </LogoContainer>
        <EmptyDiv />
        <NavLinkWithCursor end to="/">
          {isLargeScreen ? (
            <span>Home</span>
          ) : (
            <i className="material-icons">home</i>
          )}
        </NavLinkWithCursor>
        <NavLinkWithCursor to="/about">
          {isLargeScreen ? (
            <span>About</span>
          ) : (
            <i className="material-icons">person_3</i>
          )}
        </NavLinkWithCursor>
        <NavLinkWithCursor to="/portfolio">
          {isLargeScreen ? (
            <span>Portfolio</span>
          ) : (
            <i className="material-icons">web_asset</i>
          )}
        </NavLinkWithCursor>
        <NavLinkWithCursor to="/contact">
          {isLargeScreen ? (
            <span>Contact</span>
          ) : (
            <i className="material-icons">call</i>
          )}
        </NavLinkWithCursor>
        <DarkModeBtnWithCursor onClick={changeColorMode}>
          <DarkModeIcon />
        </DarkModeBtnWithCursor>
        {languages.map((lang, index) => (
          <LanguageContainer key={lang}>
            <LanguageBtnWithCursor
              onClick={() => handleChangeLanguage(lang as Language)}
              className={i18n.language === lang ? "selected" : ""}
            >
              {t(`${lang.toUpperCase()}`)}
            </LanguageBtnWithCursor>
            {index !== languages.length - 1 && (
              <LanguageBtnDivider>|</LanguageBtnDivider>
            )}
          </LanguageContainer>
        ))}
      </Navbar>
    </NavContainer>
  );
};

export default Navigation;
