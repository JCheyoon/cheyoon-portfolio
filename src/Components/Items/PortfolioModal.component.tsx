import {
  BackDropContainer,
  ModalBtn,
  ModalContainer,
  ModalContent,
} from "./PortfolioModal.style";
import { useContext } from "react";
import { ModalContext } from "../../Context/modal-context";
import { withCursor } from "../../Components/Cursor/withCursor";

const ButtonWithCursor = withCursor(ModalBtn);

const PortfolioModal = () => {
  const { hideModal, content } = useContext(ModalContext);
  return (
    <ModalContainer>
      <BackDropContainer />
      <ModalContent className="modal-content">
        {content}
        <ButtonWithCursor onClick={hideModal}>
          <span className="material-symbols-outlined">close</span>
        </ButtonWithCursor>
      </ModalContent>
    </ModalContainer>
  );
};

export default PortfolioModal;
