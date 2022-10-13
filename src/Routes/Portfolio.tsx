import { PageContainer } from "../Page.style";
import {
  PortfolioContainer,
  PortfolioGrid,
  PortfolioTypeBtn,
} from "./Portfolio.style";
import PortfolioItem from "../Components/Items/PortfolioItem.component";
import {
  portfolioCodeItems,
  portfolioDesignItems,
} from "../Components/Items/PortfolioData";
import PortfolioModal from "../Components/Items/PortfolioModal.component";
import { useContext, useState } from "react";
import { ModalContext } from "../Context/modal-context";
import { withCursor } from "../Components/Cursor/withCursor";

const Portfolio = () => {
  const modalCtx = useContext(ModalContext);
  const [portfolioTypeIsCode, setPortfolioTypeIsCode] = useState<boolean>(true);
  const ButtonWithCursor = withCursor(PortfolioTypeBtn);

  return (
    <>
      {modalCtx?.show ? <PortfolioModal /> : null}
      <PageContainer>
        <PortfolioContainer>
          <div>
            <ButtonWithCursor onClick={() => setPortfolioTypeIsCode(true)}>
              <h1>Code</h1>
            </ButtonWithCursor>
            <ButtonWithCursor onClick={() => setPortfolioTypeIsCode(false)}>
              <h1>Design</h1>
            </ButtonWithCursor>
          </div>

          <PortfolioGrid>
            {portfolioTypeIsCode
              ? portfolioCodeItems.map((item) => (
                  <PortfolioItem
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}
                    element={item.element}
                  />
                ))
              : portfolioDesignItems.map((item) => (
                  <PortfolioItem
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}
                    element={item.element}
                  />
                ))}
          </PortfolioGrid>
        </PortfolioContainer>
      </PageContainer>
    </>
  );
};
export default Portfolio;
