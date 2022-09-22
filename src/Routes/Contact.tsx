import { PageContainer } from "../Page.style";
import {
  ContactContainer,
  ContactIcon,
  ContactItems,
  ContactSection,
  MapAndItemDiv,
  MapDiv,
} from "./Contact.stlye";
import { ReactComponent as LinkedInIcon } from "../Assets/LinkedIn.svg";
import { ReactComponent as GithubInIcon } from "../Assets/gitHub.svg";
import { withCursor } from "../Components/Cursor/withCursor";

const IconWithCursor = withCursor(ContactIcon);

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <h1>Contact</h1>
        <MapAndItemDiv>
          <MapDiv>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.0946461824797!2d19.07029971083121!3d47.512197932555125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc77375eba3f%3A0x741182668cd24071!2sBajza%20utca!5e0!3m2!1sko!2shu!4v1663758631507!5m2!1sko!2shu"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapDiv>
          <ContactSection>
            <ContactItems>
              <IconWithCursor
                href="mailto:jessietwo94@gmail.com"
                target="_blank"
              >
                <span>
                  <i className="material-icons">email</i>
                </span>
              </IconWithCursor>
            </ContactItems>
            <ContactItems>
              <IconWithCursor
                href="https://www.linkedin.com/in/cheyoon-jung-11148b19b/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconWithCursor>
            </ContactItems>
            <ContactItems>
              <IconWithCursor
                href="https://github.com/JCheyoon"
                target="_blank"
              >
                <GithubInIcon />
              </IconWithCursor>
            </ContactItems>
          </ContactSection>
        </MapAndItemDiv>
      </ContactContainer>
    </PageContainer>
  );
};
export default Contact;
