import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import ProjectHeader from "./Style/ProjectHeader.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import { useTranslation } from "react-i18next";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";

const Begopa = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title="Begopa"
        tags={["React", "Scss"]}
        img="https://storage.jcheyoon.com/begopa.gif"
      />
      <p>{t("begopa.header")}</p>
      <ProjectsLink siteLink="https://begopa.jcheyoon.com/" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("begopa.feature.h1")} -<span>&nbsp;{t("begopa.feature.p1")}</span>
        </li>
        <li>
          {t("begopa.feature.h2")} -<span>&nbsp;{t("begopa.feature.p2")}</span>
        </li>
        <li>
          {t("begopa.feature.h3")} -<span>&nbsp;{t("begopa.feature.p3")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/begopa" />
    </ProjectBox>
  );
};

export default Begopa;
