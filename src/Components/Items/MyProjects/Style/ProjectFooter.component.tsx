import { ProjectLinkStyle } from "./ProjectLink.style";
import { ProjectFooterStyle } from "./ProjectFooter.style";
import { linkPropsType } from "./ProjectsLink.component";

const ProjectFooter = ({ siteLink }: linkPropsType) => {
  return (
    <ProjectFooterStyle>
      <span>For the code repository</span>
      <ProjectLinkStyle>
        <a href={siteLink} target="_blank">
          Click here
        </a>
      </ProjectLinkStyle>
    </ProjectFooterStyle>
  );
};

export default ProjectFooter;
