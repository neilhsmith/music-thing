import { createElement, ReactNode } from "react";
import styled from "styled-components";

type FlexBoxProps = {
  alignContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "stretch";
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  alignSelf?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  children: ReactNode;
  display?: "flex" | "inline-flex";
  element?:
    | "article"
    | "aside"
    | "div"
    | "figure"
    | "footer"
    | "header"
    | "main"
    | "nav"
    | "section";
  flex?: string | number;
  flexBasis?: string | number;
  flexDirection?: "column-reverse" | "column" | "row-reverse" | "row";
  flexGrow?: string | number;
  flexShrink?: string | number;
  flexWrap?: "nowrap" | "wrap-reverse" | "wrap";
  height?: string | 0;
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between";
  margin?: string | 0;
  marginBottom?: string | 0;
  marginLeft?: string | 0;
  marginRight?: string | 0;
  marginTop?: string | 0;
  maxHeight?: string | 0;
  minHeight?: string | 0;
  maxWidth?: string | 0;
  minWidth?: string | 0;
  order?: number;
  padding?: string | 0;
  paddingBottom?: string | 0;
  paddingLeft?: string | 0;
  paddingRight?: string | 0;
  paddingTop?: string | 0;
  width?: string | 0;
};

const defaultProps: FlexBoxProps = {
  children: "",
  element: "div",
  display: "flex",
};

export const FlexBox = styled(
  ({ children, element, ...otherProps }: FlexBoxProps) =>
    createElement(element || "div", otherProps, children)
)`
  ${(props) => cssFromProp(props.alignContent, "align-content")}
  ${(props) => cssFromProp(props.alignItems, "align-items")}
  ${(props) => cssFromProp(props.alignSelf, "align-self")}
  ${(props) => cssFromProp(props.display, "display")}
  ${(props) => cssFromProp(props.flex, "flex")}
  ${(props) => cssFromProp(props.flexBasis, "flex-basis")}
  ${(props) => cssFromProp(props.flexDirection, "flex-direction")}
  ${(props) => cssFromProp(props.flexGrow, "flex-grow")}
  ${(props) => cssFromProp(props.flexShrink, "flex-shrink")}
  ${(props) => cssFromProp(props.flexWrap, "flex-wrap")}
  ${(props) => cssFromProp(props.height, "height")}
  ${(props) => cssFromProp(props.justifyContent, "justify-content")}
  ${(props) => cssFromProp(props.margin, "margin")}
  ${(props) => cssFromProp(props.marginBottom, "margin-bottom")}
  ${(props) => cssFromProp(props.marginLeft, "margin-left")}
  ${(props) => cssFromProp(props.marginRight, "margin-right")}
  ${(props) => cssFromProp(props.marginTop, "margin-top")}
  ${(props) => cssFromProp(props.maxHeight, "max-height")}
  ${(props) => cssFromProp(props.minHeight, "min-height")}
  ${(props) => cssFromProp(props.maxWidth, "max-width")}
  ${(props) => cssFromProp(props.minWidth, "min-width")}
  ${(props) => cssFromProp(props.order, "order")}
  ${(props) => cssFromProp(props.padding, "padding")}
  ${(props) => cssFromProp(props.paddingBottom, "padding-bottom")}
  ${(props) => cssFromProp(props.paddingLeft, "padding-left")}
  ${(props) => cssFromProp(props.paddingRight, "padding-right")}
  ${(props) => cssFromProp(props.paddingTop, "padding-top")}
  ${(props) => cssFromProp(props.width, "width")}
`;

FlexBox.defaultProps = defaultProps;

const cssFromProp = (prop: any, cssProp: string) =>
  prop || prop === 0 ? `${cssProp}: ${prop};` : "";
