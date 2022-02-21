import { ReactNode } from "react";

export type TabItemProps = {
  label: string;
  panel: ReactNode;
};

export type OrientationProps = { orientation: "horizontal" | "vertical" };
