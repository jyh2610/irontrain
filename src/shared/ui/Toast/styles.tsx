import styled from "styled-components";

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9999;
  max-width: var(--max-width);
  margin: 0 auto;
  gap: 1.2rem;
  width: calc(100% - 4rem);
  max-width: var(--max-width);
  padding: 1.5rem 2.4rem;
  background: var(--color-point);
  left: 2rem;
  right: 2rem;
  margin: 0 auto;
  bottom: 6%;
  border-radius: 0.8rem;
  transition:
    transform 0.5s,
    opacity 0.5s;

  &.visible {
    visibility: "visible";
    opacity: 1;
  }

  &.hidden {
    visibility: "hidden";
    opacity: 0;
  }

  &.fail {
    background: var(--color-red);
  }
`;
