import React, { createContext, useState } from "react";

export type DefaultValue = {
  showModal: (content: JSX.Element) => void;
  hideModal: () => void;
  show: boolean;
  content: JSX.Element | undefined;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<DefaultValue>({} as DefaultValue);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState<JSX.Element | undefined>();

  const openModalHandler = (content: JSX.Element) => {
    setContent(content);
    setShow(true);
  };
  const closeModalHandler = () => {
    setShow(false);
  };

  const modalValue: DefaultValue = {
    showModal: openModalHandler,
    hideModal: closeModalHandler,
    show,
    content,
  };

  return (
    <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
  );
};
