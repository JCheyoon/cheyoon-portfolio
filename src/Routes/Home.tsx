import {
  BorderBox,
  HomeContainer,
  PicContainer,
  TextContainer,
} from "./Home.style";
import { Button, PageContainer } from "../Page.style";
import { Link } from "react-router-dom";
import { withCursor } from "../Components/Cursor/withCursor";
import { useTranslation } from "react-i18next";

const LinkWithCursor = withCursor(Link);

const Home = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <HomeContainer>
        <PicContainer />
        <TextContainer>
          <h1>
            <span className="firstName">{t("firstname")}</span>
            <span>{t("lastname")}</span>
          </h1>
          <BorderBox />
          <p>{t("home.paragraph1")}</p>
          <p>{t("home.paragraph2")}</p>
          <LinkWithCursor to="/about">
            <Button>{t("about.btn")}</Button>
          </LinkWithCursor>
        </TextContainer>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;
