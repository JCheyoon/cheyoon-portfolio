import { SkillTextsContainer } from "./SkilTexts.style";
import { MySkills } from "./About";

const SkillTexts = ({ lists }: { lists: MySkills[] }) => {
  return (
    <SkillTextsContainer>
      {lists.map((list) => (
        <li key={list.tech}>
          <div>
            <span className="tech">{list.tech}</span>
          </div>
          <span>{list.description}</span>
        </li>
      ))}
    </SkillTextsContainer>
  );
};

export default SkillTexts;
