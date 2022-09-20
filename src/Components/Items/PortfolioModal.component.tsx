import {
  BackDropContainer,
  ModalContainer,
  ModalContent,
} from "./PortfolioModal.style";
import { useContext } from "react";
import { ModalContext } from "../../Context/modal-context";

const PortfolioModal = () => {
  const { title, hideModal, content } = useContext(ModalContext);
  return (
    <ModalContainer>
      <BackDropContainer />
      <ModalContent>
        <h1>{title}</h1>
        {content}
        <button onClick={hideModal}>
          <i className="material-icons">close</i>
        </button>
      </ModalContent>
    </ModalContainer>
  );
};

export default PortfolioModal;
