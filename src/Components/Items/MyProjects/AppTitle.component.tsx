import { ProjectBox } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";

const AppTitle = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="App Title"
        tags={["AfterEffects", "2D"]}
        img=""
        requireVideo={true}
        video="../AppTitle.mp4"
      />
      <p>App Title</p>
    </ProjectBox>
  );
};

export default AppTitle;
