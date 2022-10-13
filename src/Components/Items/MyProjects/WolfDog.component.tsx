import { ProjectBox } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";

const WolfDog = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="WolfDog"
        tags={["Cinema4d", "3D", "Modeling"]}
        img="../wolf.gif"
      />
      <p>My first modeling that I made 0 to 100</p>
    </ProjectBox>
  );
};
export default WolfDog;
