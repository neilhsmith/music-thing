import { signIn } from "next-auth/react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { FieldGroup, Label, Field, ErrorMessage } from "../form";
import { Button } from "../button";

export const LoginForm = () => {
  return (
    <Wrapper>
      <Section>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: any = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FieldGroup>
                <Label htmlFor="email">Email</Label>
                <Field disabled type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="password">Password</Label>
                <Field disabled type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </FieldGroup>
              <Button color="primary" type="submit" disabled={true}>
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Section>
      <Divider>or</Divider>
      <Section>
        <Button onClick={() => signIn("google", { callbackUrl: "/app" })}>
          Sign In with Google
        </Button>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.bg2};
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 3rem;
  }
`;

const Section = styled.div`
  margin: 6rem 0;

  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Divider = styled.span`
  position: relative;
  display: block;
  text-align: center;
  margin-bottom: 2rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: 1px;
    height: 1px;
    width: 40%;
    background: ${(props) => props.theme.colors.text};
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
