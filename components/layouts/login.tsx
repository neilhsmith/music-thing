import { ReactNode } from "react";
import styled from "styled-components";
import { FlexBox } from "../flexBox";

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <FlexBox
      element="main"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Container>{children}</Container>
    </FlexBox>
  );
};

const Container = styled.div`
  max-width: 46rem;
  width: 100%;

  @media (max-width: 480px) {
    margin: 0 4%;
  }
`;
