import { ProjectBox } from "./Style/ProjectStyle";
import ProjectHeader from "./Style/ProjectHeader.component";

const IPhoneParody = () => {
  return (
    <ProjectBox>
      <ProjectHeader
        title="I Phone Parody"
        tags={["AfterEffects", "2D"]}
        img=""
        requireVideo={true}
        video="../IPhoneParody.mp4"
      />
      <p>I Phone Parody</p>
    </ProjectBox>
  );
};

export default IPhoneParody;
