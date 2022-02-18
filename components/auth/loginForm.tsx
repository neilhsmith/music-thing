import { signIn } from "next-auth/react";
import styled from "styled-components";
import { Button } from "../button";

export const LoginForm = () => {
  return (
    <Wrapper>
      <Section>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Email</label>
          <input id="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </Section>
      <Divider>or</Divider>
      <Section>
        <Button
          type="danger"
          onClick={() => signIn("google", { callbackUrl: "/app" })}
        >
          Sign in with Google
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
