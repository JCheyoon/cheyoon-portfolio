import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";

const Sample = () => {
  return (
    <>
      <ProjectHeader
        title="Sample"
        tags={["Javascript", "Scss"]}
        img="../project2.png"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
        consectetur cum deleniti dicta dignissimos distinctio dolor dolores
        ducimus earum eos error esse eum explicabo harum impedit in incidunt
        ipsam ipsum itaque libero maxime molestias nihil non officia omnis
        perspiciatis possimus qui, repudiandae sit tempora ullam voluptas
        voluptatum? Eius, natus.
      </p>
      <ProjectsLink siteLink="/" />
      <h3>Features:</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <ProjectFooter siteLink="/" />
    </>
  );
};
export default Sample;
