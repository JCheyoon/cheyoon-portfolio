import {
  Description,
  DescriptionTags,
  ItemWrapper,
} from "./PortfolioItem.stlye";
import { Button } from "../../Page.style";
import { withCursor } from "../Cursor/withCursor";
import { ItemType } from "./PortfolioData";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modal-context";

const ButtonWithCursor = withCursor(Button);

const PortfolioItem = ({ imgUrl, title, description, element }: ItemType) => {
  const { showModal } = useContext(ModalContext);

  return (
    <ItemWrapper imgUrl={imgUrl}>
      <Description>
        <h1>{title}</h1>
        <DescriptionTags>
          {description.map((des, index) => (
            <span key={index}>
              <p>{des}</p>
            </span>
          ))}
        </DescriptionTags>
        <ButtonWithCursor onClick={() => showModal(element ?? <div>x</div>)}>
          Show more
        </ButtonWithCursor>
      </Description>
    </ItemWrapper>
  );
};

export default PortfolioItem;
