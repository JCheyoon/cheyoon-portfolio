import { ProjectBox } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";

const ColaJelly = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="Cola Jelly"
        tags={["Cinema4d", "3D", "Loop"]}
        img="../cola.gif"
      />
      <p>Cola Jelly</p>
    </ProjectBox>
  );
};
export default ColaJelly;
