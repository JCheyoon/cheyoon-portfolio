import React, { createContext, useState } from "react";

export type DefaultValue = {
  title: string;
  showModal: (content: JSX.Element) => void;
  hideModal: () => void;
  show: boolean;
  content: JSX.Element | undefined;
  // setContent: React.SetStateAction<React.Component | undefined>;
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
    title: "Using React Context in a Typescript App",
    showModal: openModalHandler,
    hideModal: closeModalHandler,
    show,
    content,
  };

  return (
    <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
  );
};
