import { ProjectLinkStyle } from "./ProjectLink.style";
import { ProjectFooterStyle } from "./ProjectFooter.style";
import { linkPropsType } from "./ProjectsLink.component";
import { useTranslation } from "react-i18next";

const ProjectFooter = ({ siteLink }: linkPropsType) => {
  const { t } = useTranslation();
  return (
    <ProjectFooterStyle>
      <span>{t("portfolio.footer.h")}</span>
      <ProjectLinkStyle>
        <a href={siteLink} target="_blank">
          {t("portfolio.footer.p")}
        </a>
      </ProjectLinkStyle>
    </ProjectFooterStyle>
  );
};

export default ProjectFooter;
