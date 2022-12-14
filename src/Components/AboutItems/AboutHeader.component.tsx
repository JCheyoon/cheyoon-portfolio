import React from "react";
import { Mytext } from "./AboutHeader.style";

interface TextType {
  firstText: string;
  secondText: string;
  thirdText?: string;
}
const AboutHeader = ({ firstText, secondText, thirdText }: TextType) => {
  return (
    <Mytext>
      <span>{firstText}</span>
      <span className="emphasize">{secondText}</span>
      {thirdText ? <span>{thirdText}</span> : null}
    </Mytext>
  );
};

export default AboutHeader;
