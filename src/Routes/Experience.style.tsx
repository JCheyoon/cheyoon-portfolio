import styled from "styled-components";

export const ExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  @media (min-width: 800px) {
    padding: 20px 0;
    margin-top: 0;
  }

  h2 {
    color: var(--primary-color);
  }

  img {
    max-width: 100%;
  }

  hr {
    border-color: var(--primary-color);
    margin: 1.5rem 0.5rem;
  }

  iframe {
    max-width: 100%;
  }
`;
