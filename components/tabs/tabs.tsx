import { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../flexBox";
import { TabItemProps, OrientationProps } from "./tabs.types";

type TabsProps = OrientationProps & {
  items: TabItemProps[];
};

export const Tabs = ({ orientation, items }: TabsProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <TabsWrapper orientation={orientation}>
      {items && (
        <NavWrapper orientation={orientation}>
          {items.map((item, i) => (
            <Tab
              key={i}
              active={i === selectedIdx}
              onClick={() => setSelectedIdx(i)}
            >
              {item.label}
            </Tab>
          ))}
        </NavWrapper>
      )}
      <TabPanel orientation={orientation}>{items[selectedIdx].panel}</TabPanel>
    </TabsWrapper>
  );
};

Tabs.defaultProps = {
  orientation: "vertical",
};

const Tab = styled.button<{ active: boolean }>`
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  margin: 1rem 2rem;
  border: 0;
  color: ${(props) =>
    props.active ? props.theme.colors.textActive : props.theme.colors.text};
`;

const TabPanel = styled.div<OrientationProps>`
  padding: ${(props) =>
    props.orientation === "vertical" ? "1rem 3rem" : "2rem 0"};
`;

const TabsWrapper = styled(FlexBox)<OrientationProps>`
  flex-direction: ${(props) =>
    props.orientation === "vertical" ? "row" : "column"};
`;

const NavWrapper = styled(FlexBox)<OrientationProps>`
  flex-direction: ${(props) =>
    props.orientation === "vertical" ? "column" : "row"};
  margin-bottom: ${(props) =>
    props.orientation === "vertical" ? "0" : "1.8rem"};
  border: 0;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  border-right-width: ${(props) =>
    props.orientation === "vertical" ? "1px" : "0"};
  border-bottom-width: ${(props) =>
    props.orientation === "horizontal" ? "1px" : "0"};

  ${Tab} {
    &:first-of-type {
      ${(props) => props.orientation === "horizontal" && "margin-left: 0"};
    }
    &:last-of-type {
      ${(props) => props.orientation === "horizontal" && "margin-right: 0"};
    }
  }
`;
