import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";

const Three = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="THREE"
        tags={["React", "ReactThreeFiber", "Rapier", "Drei", "Blender", "SCSS"]}
        img="https://storage.jcheyoon.com/three.gif"
      />
      <p>My first R3F site.(ON GOING)</p>

      <ProjectsLink siteLink="https://three.jcheyoon.com/" />
      <h3>Features:</h3>
      <ProjectUl>
        <li>
          Playable -<span>&nbsp;Visitors can move character.</span>
        </li>
        <li>
          Physics -<span>&nbsp;Visitors can interact with some objects.</span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/firstThreejsPortfolio" />
    </ProjectBox>
  );
};
export default Three;
