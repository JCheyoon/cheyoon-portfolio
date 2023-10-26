import { useTranslation } from "react-i18next";

const ProjectFeatureHeader = () => {
  const { t } = useTranslation();
  return <h3>{t("portfolio.feature.h")}</h3>;
};

export default ProjectFeatureHeader;
