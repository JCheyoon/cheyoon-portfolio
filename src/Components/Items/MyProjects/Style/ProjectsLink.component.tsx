import { ProjectLinkStyle } from "./ProjectLink.style";

export interface linkPropsType {
  siteLink: string;
}

const ProjectsLink = ({ siteLink }: linkPropsType) => {
  return (
    <ProjectLinkStyle>
      <a href={siteLink} target="_blank">
        <span className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
        <span> Try it here</span>
      </a>
    </ProjectLinkStyle>
  );
};

export default ProjectsLink;
