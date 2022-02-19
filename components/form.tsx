import styled from "styled-components";
import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from "formik";

export const FieldGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label``;

export const Field = styled(FormikField)`
  width: 100%;

  &:disabled {
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${(props) => props.theme.colors.danger};
  font-weight: ${(props) => props.theme.weights.accent};
`;
