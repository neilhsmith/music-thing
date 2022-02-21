import { ReactNode } from "react";
import styled from "styled-components";

export const TabPanel = ({ children }: { children: ReactNode }) => {
  return <PanelWrapper>{children}</PanelWrapper>;
};

const PanelWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
