import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  height: 48px;
`;

export const RotatedResetIcon = styled(GrPowerReset)`
  transform: rotate(180deg);
  cursor: pointer;
`;
