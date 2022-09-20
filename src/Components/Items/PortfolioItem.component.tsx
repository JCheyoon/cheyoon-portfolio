import { Description, ItemWrapper } from "./PortfolioItem.stlye";
import { Button } from "../../Page.style";
import { withCursor } from "../../Components/Cursor/withCursor";
import { ItemType } from "../Texts/PortfolioData";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modal-context";

const ButtonWithCursor = withCursor(Button);

const PortfolioItem = ({
  imgUrl,
  title,
  projectUrl,
  description,
  element,
}: ItemType) => {
  const { showModal } = useContext(ModalContext);

  return (
    <ItemWrapper imgUrl={imgUrl}>
      <Description>
        <h1>{title}</h1>
        <div>
          {description.map((des, index) => (
            <p key={index}>{des}</p>
          ))}
        </div>
        <ButtonWithCursor onClick={() => showModal(element ?? <div>x</div>)}>
          Show more
        </ButtonWithCursor>
      </Description>
    </ItemWrapper>
  );
};

export default PortfolioItem;
