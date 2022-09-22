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

const ButtonWithCursor = withCursor(Button);

const About = () => {
  const onDownload = () => {
    window.open("/JungCheyoon-CV.pdf", "_blank");
  };

  return (
    <PageContainer>
      <AboutBox>
        <AboutContainer>
          <InfoContainer>
            <Pic />
            <AboutHeader firstText="CHEYOON" secondText="JUNG" />
            <InfoTexts />
            <ButtonWithCursor onClick={onDownload}>
              Download CV
            </ButtonWithCursor>
          </InfoContainer>
          <SkillContainer>
            <AboutHeader firstText="Programming" secondText="skills" />
            <SkillTexts lists={skillList} />
            <AboutHeader
              firstText="I would like to"
              secondText="learn"
              thirdText="in the future"
            />
            <SkillTexts lists={wantToLearn} />
            <AboutHeader firstText="Other" secondText="skills" />
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
