import ProjectHeader from "./Style/ProjectHeader.component";
import { ProjectBox, ProjectUl } from "./Style/ProjectStyle";

const Introduction = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="App Introduction"
        tags={["AfterEffects", "2D", "Typography"]}
        img=""
        requireVideo={true}
        video="../Introduction.mp4"
      />
      <p>Introduction</p>
    </ProjectBox>
  );
};
export default Introduction;
