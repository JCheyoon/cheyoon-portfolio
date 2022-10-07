import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";

const Acnh = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="ACNH_v2"
        tags={["React", "TypeScript", "MUI"]}
        img="https://storage.jcheyoon.com/acnh.gif"
      />
      <p>Fan site for Animal Crossing New Horizons (Nintendo game).</p>

      <ProjectsLink siteLink="https://acnh.jcheyoon.com/" />
      <h3>Features:</h3>
      <ProjectUl>
        <li>
          Authentication state in frontend -
          <span>&nbsp;Visitors can sign up and login, logout.</span>
        </li>
        <li>
          Communicating with Rest API -
          <span>
            &nbsp;Get Item & villagers data from Public API, Visitors can save &
            delete villagers to Island villagers and Favorite villagers.
          </span>
        </li>
        <li>
          Tags filtering & Searching -
          <span>
            &nbsp;Visitors can filter Villagers by personality tag, can search
            villagers and items by name.
          </span>
        </li>
        <li>
          Material-UI -
          <span>
            &nbsp; Thanks to MUI it was really easy to create a nice looking and
            easily usable interface without writing even a line of CSS.
          </span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/ACNH_v2" />
    </ProjectBox>
  );
};
export default Acnh;
