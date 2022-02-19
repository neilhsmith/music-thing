import { createElement, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { lighten } from "polished";

type ButtonProps = {
  color?: "primary" | "secondary" | "warning" | "danger" | "transparent";
  inline?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.inline! ? "auto" : "100%")};
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.weights.accent};
  padding: ${(props) => paddingCssFromSize(props.size || "md")};
  color: ${(props) => props.theme.buttons.fgs[props.color!]};
  background-color: ${(props) => props.theme.buttons.bgs[props.color!]};
  border-color: ${(props) => props.theme.buttons.bgs[props.color!]};
  &:hover {
    background-color: ${(props) =>
      lighten(0.1, props.theme.buttons.bgs[props.color!])};
    border-color: ${(props) =>
      lighten(0.1, props.theme.buttons.bgs[props.color!])};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  color: "secondary",
  inline: false,
  size: "md",
};

const paddingCssFromSize = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
  if (size === "xs") return "0";
  if (size === "sm") return ".5rem 1rem";
  if (size === "md") return "1rem 2rem";
  if (size === "lg") return "1.2rem 2.4rem";
  if (size === "xl") return "1.4rem 2.65rem";
};
