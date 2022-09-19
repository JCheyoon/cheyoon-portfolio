import { SkillTextsContainer } from "./SkilTexts.style";

export type MySkills = {
  tech: string;
  description: string;
};

const SkillTexts = ({ lists }: { lists: MySkills[] }) => {
  return (
    <SkillTextsContainer>
      {lists.map((list) => (
        <li>
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
