import { createElement, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { lighten } from "polished";

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary" | "warning" | "danger";
};

export const Button = styled(({ children, ...otherProps }: ButtonProps) =>
  createElement("button", otherProps, children)
)`
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 2rem;
  font-weight: ${(props) => props.theme.weights.accent};
  color: ${(props) => props.theme.buttons.fgs[props.type!]};
  background-color: ${(props) => props.theme.buttons.bgs[props.type!]};
  border-color: ${(props) => props.theme.buttons.bgs[props.type!]};

  &:hover {
    background-color: ${(props) =>
      lighten(0.1, props.theme.buttons.bgs[props.type!])};
    border-color: ${(props) =>
      lighten(0.1, props.theme.buttons.bgs[props.type!])};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  type: "secondary",
};
