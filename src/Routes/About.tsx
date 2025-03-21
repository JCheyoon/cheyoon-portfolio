import { Button, PageContainer } from "../Page.style";
import {
  AboutBox,
  AboutContainer,
  InfoContainer,
  OtherSkills,
  Pic,
  SkillContainer,
} from "./About.stlye";
import InfoTexts from "../Components/AboutItems/InfoTexts.component";
import SkillTexts from "../Components/AboutItems/SkillTexts.component";
import AboutHeader from "../Components/AboutItems/AboutHeader.component";

import { ReactComponent as AISvg } from "../Assets/AI.svg";
import { ReactComponent as AESvg } from "../Assets/AE.svg";
import { ReactComponent as PRSvg } from "../Assets/PR.svg";
import { ReactComponent as PSSvg } from "../Assets/PS.svg";
import { ReactComponent as C4DSvg } from "../Assets/C4D.svg";
import { withCursor } from "../Components/Cursor/withCursor";
import { skillList, wantToLearn } from "../Components/AboutItems/About";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LinkWithCursor = withCursor(Link);

const About = () => {
  const { t } = useTranslation();
  const onDownload = () => {
    window.open("/JungCheyoon-CV.pdf", "_blank");
  };

  return (
    <PageContainer>
      <AboutBox>
        <AboutContainer>
          <InfoContainer>
            <Pic />
            <AboutHeader
              firstText={t("firstname")}
              secondText={t("lastname")}
            />
            <InfoTexts />
            <LinkWithCursor to="/experience">
              <Button>{t("gotoExperience.btn")}</Button>
            </LinkWithCursor>
          </InfoContainer>
          <SkillContainer>
            <AboutHeader
              firstText={t("about.skill.header1")}
              secondText={t("about.skill.header2")}
            />
            <SkillTexts lists={skillList} />
            <AboutHeader
              firstText={t("about.m.header1")}
              secondText={t("about.m.header2")}
              thirdText={t("about.m.header3")}
            />
            <SkillTexts lists={wantToLearn} />
            <AboutHeader
              firstText={t("about.other.header1")}
              secondText={t("about.other.header2")}
            />
            <OtherSkills>
              <li>
                <AESvg />
              </li>
              <li>
                <AISvg />
              </li>
              <li>
                <PRSvg />
              </li>
              <li>
                <PSSvg />
              </li>
              <li>
                <C4DSvg />
              </li>
            </OtherSkills>
          </SkillContainer>
        </AboutContainer>
      </AboutBox>
    </PageContainer>
  );
};

export default About;
