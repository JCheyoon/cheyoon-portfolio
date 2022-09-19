import { Button, PageContainer } from "../Page.style";
import {
  AboutContainer,
  InfoContainer,
  OtherSkills,
  Pic,
  SkillContainer,
} from "./About.stlye";
import InfoTexts from "../Components/Texts/InfoTexts.component";
import SkillTexts, { MySkills } from "../Components/Texts/SkillTexts.component";
import AboutHeader from "../Components/Texts/AboutHeader.component";

import { ReactComponent as AISvg } from "../Assets/AI.svg";
import { ReactComponent as AESvg } from "../Assets/AE.svg";
import { ReactComponent as PRSvg } from "../Assets/PR.svg";
import { ReactComponent as PSSvg } from "../Assets/PS.svg";
import { ReactComponent as C4DSvg } from "../Assets/C4D.svg";
import { withCursor } from "../Components/Cursor/withCursor";

const ButtonWithCursor = withCursor(Button);

const skillList: MySkills[] = [
  { tech: "Html", description: "I love it" },
  { tech: "Css", description: "I love it" },
  { tech: "Scss", description: "I love it" },
  { tech: "Javascript", description: "I love it" },
  { tech: "TypeScript", description: "I love it" },
  { tech: "React", description: "I love it" },
];
const wantToLearn: MySkills[] = [
  { tech: "Three.js", description: "I love it" },
];

const About = () => {
  const onDownload = () => {
    console.log("hi");
  };

  return (
    <PageContainer>
      <AboutContainer>
        <InfoContainer>
          <Pic />
          <AboutHeader firstText="CHEYOON" secondText="JUNG" />
          <InfoTexts />
          <ButtonWithCursor onClick={onDownload}>Download CV</ButtonWithCursor>
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
    </PageContainer>
  );
};

export default About;
