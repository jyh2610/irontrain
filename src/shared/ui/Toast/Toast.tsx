import classNames from "classnames";
import { ToastContainer } from "./styles";
interface Props {
  text: string;
  visibility: "visible" | "hidden";
  type?: "success" | "fail";
}

export const Toast = ({ text, visibility, type }: Props) => {
  return (
    <ToastContainer className={classNames(visibility, type)}>
      <p>{text}</p>
    </ToastContainer>
  );
};
