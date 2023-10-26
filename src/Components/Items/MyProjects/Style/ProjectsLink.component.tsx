import { ProjectLinkStyle } from "./ProjectLink.style";
import { useTranslation } from "react-i18next";

export interface linkPropsType {
  siteLink: string;
}

const ProjectsLink = ({ siteLink }: linkPropsType) => {
  const { t } = useTranslation();
  return (
    <ProjectLinkStyle>
      <a href={siteLink} target="_blank">
        <span className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
        <span>{t("portfolio.link.message")}</span>
      </a>
    </ProjectLinkStyle>
  );
};

export default ProjectsLink;
