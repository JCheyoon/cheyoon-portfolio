import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";
import { useTranslation } from "react-i18next";

const Acnh = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title="ACNH_v2"
        tags={["React", "TypeScript", "MUI"]}
        img="https://storage.jcheyoon.com/acnh.gif"
      />
      <p>{t("acnh.header")}</p>

      <ProjectsLink siteLink="https://acnh.jcheyoon.com/" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("acnh.feature.h1")} -
          <span>
            &nbsp;{t("acnh.feature.p1")}
            {t("acnh.feature.p1")}
          </span>
        </li>
        <li>
          {t("acnh.feature.h2")} -<span>&nbsp;{t("acnh.feature.p2")}</span>
        </li>
        <li>
          {t("acnh.feature.h3")} -<span>&nbsp;{t("acnh.feature.p3")}</span>
        </li>
        <li>
          {t("acnh.feature.h4")} -<span>&nbsp; {t("acnh.feature.p4")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/ACNH_v2" />
    </ProjectBox>
  );
};
export default Acnh;
