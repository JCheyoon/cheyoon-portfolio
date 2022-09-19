import { InfoTextContainer } from "./InfoTexts.style";
import { ReactComponent as LinkedInIcon } from "../../Assets/LinkedIn.svg";
import { ReactComponent as GithubInIcon } from "../../Assets/gitHub.svg";

const InfoTexts = () => {
  return (
    <InfoTextContainer>
      <li>
        <span>
          <i className="material-icons">calendar_month</i>
        </span>
        <span>05.12.1994</span>
      </li>
      <li>
        <span>
          <i className="material-icons">location_on</i>
        </span>
        <span>Budapest, Hungary</span>
      </li>
      <li>
        <span>
          <i className="material-icons">call</i>
        </span>
        <span>+36 308 56 1241</span>
      </li>
      <li>
        <span>
          <i className="material-icons">email</i>
        </span>
        <span>
          <a href="mailto:jessietwo94@gmail.com" target="_blank">
            Jessietwo94@gmail.com
          </a>
        </span>
      </li>
      <li>
        <span>
          <LinkedInIcon />
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/cheyoon-jung-11148b19b/"
            target="_blank"
          >
            Linkedin
          </a>
        </span>
      </li>
      <li>
        <span>
          <GithubInIcon />
        </span>
        <span>
          <a href="https://github.com/JCheyoon" target="_blank">
            github
          </a>
        </span>
      </li>
    </InfoTextContainer>
  );
};

export default InfoTexts;
