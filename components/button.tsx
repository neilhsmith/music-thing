import { createElement, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { lighten } from "polished";

type ButtonProps = {
  color?: "primary" | "secondary" | "warning" | "danger";
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.weights.accent};
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
};
