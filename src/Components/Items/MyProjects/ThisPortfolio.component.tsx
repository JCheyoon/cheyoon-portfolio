import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";
import ProjectsLink from "./Style/ProjectsLink.component";
import ProjectFooter from "./Style/ProjectFooter.component";

const ThisPortfolio = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="Cheyoon portfolio site"
        tags={["React", "TypeScript", "Scss"]}
        img="../project4.png"
      />
      <p>My new portfolio website made with React.</p>
      <p>
        You can check my old Portfolio site code that written in vanilla
        javascript and see how I am improved!
      </p>
      <ProjectsLink siteLink="https://github.com/JCheyoon/first_portfolio_site" />
      <h3>Features:</h3>
      <ProjectUl>
        <li>
          Introduction + Portfolio -
          <span>
            &nbsp;Visitors can read about me, my skills, also can check out my
            developer portfolio..
          </span>
        </li>
        <li>
          Dark and light themes -
          <span>
            &nbsp;Switching between the light and dark theme is possible without
            any glitch thanks to the flexibility of CSS variables.
          </span>
        </li>
      </ProjectUl>
      <ProjectFooter siteLink="https://github.com/JCheyoon/cheyoon-portfolio" />
    </ProjectBox>
  );
};

export default ThisPortfolio;
