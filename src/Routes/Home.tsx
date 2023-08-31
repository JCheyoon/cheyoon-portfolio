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
            I majored Movie Image Design and worked as a graphic designer for
            almost 2 years, where I learned to use several design tools.
          </p>
          <p>
            I also got introduced to the world of IT and started to study about
            software development. now I am ready for new challenges.
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
