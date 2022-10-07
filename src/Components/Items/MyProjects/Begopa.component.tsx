import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import ProjectHeader from "./Style/ProjectHeader.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";

const Begopa = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="Begopa"
        tags={["React", "Scss"]}
        img="https://storage.jcheyoon.com/begopa.gif"
      />
      <p>
        For my very first React project I choose to create a recipe website for
        myself. My goal was practice Real world API communication.
      </p>
      <ProjectsLink siteLink="https://begopa.jcheyoon.com/" />
      <h3>Features:</h3>
      <ProjectUl>
        <li>
          Authentication state in frontend -
          <span>&nbsp;Visitors can sign up and login, logout</span>
        </li>
        <li>
          Communicating with Rest API -
          <span>
            &nbsp;Visitors can submit their recipes which is editable &
            deletable, also can decide public or private.
          </span>
        </li>
        <li>
          Tags filtering & Searching -
          <span>
            &nbsp;Visitors can filter recipes by tag that named from them, can
            search recipe by name
          </span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/begopa" />
    </ProjectBox>
  );
};

export default Begopa;
