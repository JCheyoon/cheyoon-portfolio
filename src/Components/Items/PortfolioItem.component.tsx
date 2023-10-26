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
import { useTranslation } from "react-i18next";

const ButtonWithCursor = withCursor(Button);

const PortfolioItem = ({ imgUrl, title, description, element }: ItemType) => {
  const { t } = useTranslation();
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
          {t("portfolio.btn")}
        </ButtonWithCursor>
      </Description>
    </ItemWrapper>
  );
};

export default PortfolioItem;
