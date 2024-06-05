import { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import classNames from "classnames";
import { CloseButton, ModalBackground, ModalWrapper } from "./styles";
export const ModalPortal = ({ children }: PropsWithChildren) => {
  return ReactDom.createPortal(children, document.getElementById("modal-root") as HTMLElement);
};

interface Props {
  onClose: () => void;
  children?: React.ReactNode;
  transparent?: boolean;
}

export const Modal = ({ onClose, children, transparent }: Props) => {
  return (
    <ModalPortal>
      <ModalBackground onClick={onClose}>
        <ModalWrapper className={classNames({ transparent: !!transparent })} onClick={(e) => e.stopPropagation()}>
          {transparent ? (
            <>
              {children}
              <CloseButton size={16} onClick={onClose} />
            </>
          ) : (
            <>
              {children}
              <CloseButton size={16} onClick={onClose} />
            </>
          )}
        </ModalWrapper>
      </ModalBackground>
    </ModalPortal>
  );
};
