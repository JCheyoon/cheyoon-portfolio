import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import { useTranslation } from "react-i18next";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";

const Three = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title="THREE"
        tags={["ReactThreeFiber", "Rapier", "Drei", "Blender"]}
        img="https://storage.jcheyoon.com/three.gif"
      />
      <p>{t("three.header")}</p>

      <ProjectsLink siteLink="https://three.jcheyoon.com/" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("three.feature.h1")} -<span>&nbsp;{t("three.feature.p1")}</span>
        </li>
        <li>
          {t("three.feature.h2")} -<span>&nbsp;{t("three.feature.p2")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/firstThreejsPortfolio" />
    </ProjectBox>
  );
};
export default Three;
