import {
  ProjectHeaderStyle,
  ProjectImage,
  ProjectTags,
  ProjectVideo,
} from "./ProjectHeader.style";

interface headerPropsType {
  title: string;
  tags: string[];
  img: string;
  requireVideo?: boolean;
  video?: string;
}

const ProjectHeader = ({
  title,
  tags,
  img,
  requireVideo = false,
  video,
}: headerPropsType) => {
  return (
    <>
      <ProjectHeaderStyle>{title}</ProjectHeaderStyle>
      <ProjectTags>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </ProjectTags>
      {requireVideo ? (
        <ProjectVideo controls>
          <source src={video} type="video/mp4" />
        </ProjectVideo>
      ) : (
        <ProjectImage src={img} />
      )}
    </>
  );
};

export default ProjectHeader;
