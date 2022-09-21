import {
  ProjectHeaderStyle,
  ProjectImage,
  ProjectTags,
} from "./ProjectHeader.style";

interface headerPropsType {
  title: string;
  tags: string[];
  img: string;
}

const ProjectHeader = ({ title, tags, img }: headerPropsType) => {
  return (
    <>
      <ProjectHeaderStyle>{title}</ProjectHeaderStyle>
      <ProjectTags>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </ProjectTags>
      <ProjectImage src={img} />
    </>
  );
};

export default ProjectHeader;
