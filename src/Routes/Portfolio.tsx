import { PageContainer } from "../Page.style";
import { PortfolioContainer, PortfolioGrid } from "./Portfolio.style";
import PortfolioItem from "../Components/Items/PortfolioItem.component";
import { portfolioItems } from "../Components/Items/PortfolioData";
import PortfolioModal from "../Components/Items/PortfolioModal.component";
import { useContext } from "react";
import { ModalContext } from "../Context/modal-context";

const Portfolio = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <>
      {modalCtx?.show ? <PortfolioModal /> : null}
      <PageContainer>
        <PortfolioContainer>
          <h1>Portfolio</h1>
          <PortfolioGrid>
            {portfolioItems.map((item) => (
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
