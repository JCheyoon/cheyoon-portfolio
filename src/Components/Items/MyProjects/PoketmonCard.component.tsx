import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";

const PoketmonCard = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="Poketmon card game"
        tags={["React", "Scss", "TypeScript"]}
        img="https://storage.jcheyoon.com/poketmon-card.gif"
      />
      <p>Memory game with React</p>
      <ProjectsLink siteLink="https://poketmon-card.jcheyoon.com/" />
      <h3>Features:</h3>
      <ProjectUl>
        <li>
          Local storage -<span>&nbsp;User can check their best score.</span>
        </li>
        <li>
          Game difficulty -
          <span>
            &nbsp;user can choose 3 different type of game difficulty.
          </span>
        </li>
        <li>
          Responsive UI -
          <span>
            &nbsp;It's look fine on both desktops, tablets and mobile phones.
          </span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/poketmon-card-game" />
    </ProjectBox>
  );
};
export default PoketmonCard;
