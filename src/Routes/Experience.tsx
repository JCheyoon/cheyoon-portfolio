import React from "react";
import { ExpContainer } from "./Experience.style";
import { PageContainer } from "../Page.style";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ExpContainer>
        <h1>{t("experience.header")}</h1>
        <p>{t("experience.subHeader")}:</p>
        <h2>{t("experience.project.h1")}</h2>
        <p>{t("experience.project.p1")}</p>
        <p>{t("experience.project.p1.sub")}</p>
        <p> {t("experience.project.review.p1")}</p>
        <ul>
          <li>
            {t("experience.project.tech")}: React, Zustand, Typescript,
            Fabric.js,
          </li>
          <li>
            {t("experience.time.p1")}: 2 {t("experience.time.p2")}
          </li>
        </ul>
        <hr />
        <h2>{t("experience.project.h2")}</h2>
        <p>{t("experience.project.p2")}</p>
        <p> {t("experience.project.review.p2")}</p>
        <ul>
          <li>
            {t("experience.project.tech")}: React, Typescript, RestAPI, Styled
            Components , Redux
          </li>
          <li>
            {t("experience.time.p1")}: 5 {t("experience.time.p2")}
          </li>
        </ul>
        <hr />
        <h2>{t("experience.project.h3")}</h2>
        <p>{t("experience.project.p3")}</p>
        <p> {t("experience.project.review.p3")}</p>
        <ul>
          <li>
            {t("experience.project.tech")}: React, Typescript, RestAPI, Styled
            Components, Echarts, Zustand
          </li>
          <li>
            {t("experience.time.p1")}: 2 {t("experience.time.p2")}
          </li>
        </ul>
        <hr />
      </ExpContainer>
    </PageContainer>
  );
};

export default Experience;
