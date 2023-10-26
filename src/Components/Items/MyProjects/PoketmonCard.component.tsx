import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import ProjectFeatureHeader from "./Style/ProjectFeatureHeader";
import { useTranslation } from "react-i18next";

const PoketmonCard = () => {
  const { t } = useTranslation();
  return (
    <ProjectBox>
      <ProjectHeader
        title="Poketmon card game"
        tags={["React", "Scss", "TypeScript"]}
        img="https://storage.jcheyoon.com/poketmon-card.gif"
      />
      <p>{t("pokemon.header")}</p>
      <ProjectsLink siteLink="https://poketmon-card.jcheyoon.com/" />
      <ProjectFeatureHeader />
      <ProjectUl>
        <li>
          {t("pokemon.feature.h1")} -
          <span>&nbsp;{t("pokemon.feature.p1")}</span>
        </li>
        <li>
          {t("pokemon.feature.h2")} -
          <span>&nbsp;{t("pokemon.feature.p2")}</span>
        </li>
        <li>
          {t("pokemon.feature.h3")} -
          <span>&nbsp;{t("pokemon.feature.p3")}</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/poketmon-card-game" />
    </ProjectBox>
  );
};
export default PoketmonCard;
