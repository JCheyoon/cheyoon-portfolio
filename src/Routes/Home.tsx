import {
  BorderBox,
  HomeContainer,
  PicContainer,
  TextContainer,
} from "./Home.style";
import { Button, PageContainer } from "../Page.style";
import { Link } from "react-router-dom";

import { withCursor } from "../Components/Cursor/withCursor";

const LinkWithCursor = withCursor(Link);

const Home = () => {
  return (
    <PageContainer>
      <HomeContainer>
        <PicContainer />
        <TextContainer>
          <h1>
            <span className="firstName">CHEYOON</span>
            <span>JUNG</span>
          </h1>
          <BorderBox />
          <p>
            I majored Movie image design. I have worked as a graphic designer
            for a year which I have learnt some knowledge of design tools.
          </p>
          <p>
            Currently, I am studying programming, and I m ready for new
            challenges.
          </p>
          <LinkWithCursor to="/about">
            <Button>About Me</Button>
          </LinkWithCursor>
        </TextContainer>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;
