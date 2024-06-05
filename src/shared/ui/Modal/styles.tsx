import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(63, 61, 67, 0.65);
  backdrop-filter: blur(1px);
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34rem;
  max-width: var(--max-width);
  padding: 2rem;
  border-radius: 0.8rem;
  max-height: 80%;
  overflow-y: auto;
  background-color: white;
  z-index: 11;

  &.transparent {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    /* width: fit-content; */
    width: 80%;
    max-width: var(--max-width);

    > span {
      align-self: flex-end;
    }
  }

  > span {
    flex-shrink: 0;
  }

  > img.modal-img {
    position: relative;
    object-fit: contain;
    width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  > video.modal-video {
    position: relative;
    object-fit: contain;
    width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
`;
export const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
