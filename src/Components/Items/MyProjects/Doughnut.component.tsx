import { ProjectBox } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";

const Doughnut = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="Doughnut"
        tags={["Cinema4d", "3D", "Loop"]}
        img="../doughnut.gif"
      />
      <p>Doughnut</p>
    </ProjectBox>
  );
};
export default Doughnut;
