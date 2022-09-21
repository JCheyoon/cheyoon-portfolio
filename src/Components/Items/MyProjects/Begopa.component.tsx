import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import ProjectHeader from "./Style/ProjectHeader.component";
import { TestBox } from "./Style/ProjectStyle";

const Begopa = () => {
  return (
    <TestBox>
      <ProjectHeader
        title="Begopa"
        tags={["React", "Scss"]}
        img="../project1.png"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
        consectetur cum deleniti dicta dignissimos distinctio dolor dolores
        ducimus earum eos error esse eum explicabo harum impedit in incidunt
        ipsam ipsum itaque libero maxime molestias nihil non officia omnis
        perspiciatis possimus qui, repudiandae sit tempora ullam voluptas
        voluptatum? Eius, natus.
      </p>
      <ProjectsLink siteLink="https://begopa.jcheyoon.com/" />
      <h3>Features:</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <ProjectFooter siteLink="https://github.com/JCheyoon/begopa" />
    </TestBox>
  );
};

export default Begopa;
