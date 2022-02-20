import { ReactNode } from "react";
import styled from "styled-components";
import { Tab, TabPanel } from "./";

type TabsProps = {
  items: ReactNode | ReactNode[];
  orientation?: "horizontal" | "vertical";
};

// layout a list of tabs for each item based on orientation
// add a TabPanel and render the active item's children into it
export const Tabs = ({ orientation, items }: TabsProps) => {
  return <div>tabs</div>;
};

Tabs.defaultProps = {
  orientation: "vertical",
};
