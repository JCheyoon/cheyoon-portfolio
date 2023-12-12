import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";
import { useTranslation } from "react-i18next";

const RockPaperScissors = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title={t("RSPGame.header")}
        tags={["React", "Scss", "TypeScript"]}
        img="https://storage.jcheyoon.com/rsp.gif"
      />
      <p>{t("RSPGame.header")}</p>
      <ProjectsLink siteLink="https://cy-rocksicssorpaper.netlify.app/" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("RSPGame.feature.h1")} -
          <span>&nbsp;{t("RSPGame.feature.p1")}</span>
        </li>
        <li>
          {t("RSPGame.feature.h2")} -
          <span>&nbsp;{t("RSPGame.feature.p2")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/FrontendMentor/tree/master/RockPaperScissors" />
    </ProjectBox>
  );
};
export default RockPaperScissors;
