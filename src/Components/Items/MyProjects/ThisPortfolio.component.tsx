import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";
import { useTranslation } from "react-i18next";

const ThisPortfolio = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title="Cheyoon portfolio site"
        tags={["React", "TypeScript", "Scss"]}
        img="../project4.png"
      />
      <p>{t("thisPortfolio.header1")}</p>
      <p>{t("thisPortfolio.header2")}</p>
      <ProjectsLink siteLink="https://github.com/JCheyoon/first_portfolio_site" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("thisPortfolio.feature.h1")} -
          <span>&nbsp;{t("thisPortfolio.feature.p1")}</span>
        </li>
        <li>
          {t("thisPortfolio.feature.h2")} -
          <span>&nbsp;{t("thisPortfolio.feature.h2")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/cheyoon-portfolio" />
    </ProjectBox>
  );
};

export default ThisPortfolio;
