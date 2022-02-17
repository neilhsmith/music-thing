import { signIn } from "next-auth/react";
import styled from "styled-components";

export const LoginForm = () => {
  return (
    <Wrapper>
      <Header>
        <img src="/logo.svg" alt="MusicThing logo" />
      </Header>
      <Body>
        <button onClick={() => signIn("google", { callbackUrl: "/app" })}>
          Sign in with Google
        </button>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.bg2};
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 3rem;
  }
`;

const Header = styled.header`
  margin-bottom: 6rem;
`;

const Body = styled.div``;
