import { SkillTextsContainer } from "./SkilTexts.style";
import { MySkills } from "./About";
import { useTranslation } from "react-i18next";

const SkillTexts = ({ lists }: { lists: MySkills[] }) => {
  const { t } = useTranslation();
  return (
    <SkillTextsContainer>
      {lists.map((list) => (
        <li key={list.tech}>
          <div>
            <span className="tech">{list.tech}</span>
          </div>
          <div className="des">
            <span>{t(list.description)}</span>
          </div>
        </li>
      ))}
    </SkillTextsContainer>
  );
};

export default SkillTexts;
