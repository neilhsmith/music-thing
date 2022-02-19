import { ReactNode } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox } from "../flexBox";
import { AppNav } from "../appNav";
import { Button } from "../button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <FlexBox element="main" width="100%" height="100%">
      <Sidebar>
        <TopBar>
          <Logo>
            <Image
              src="/logo.svg"
              alt="MusicThing logo"
              layout="fill"
              objectFit="contain"
            />
          </Logo>
        </TopBar>
        <NavWrapper>
          <AppNav />
        </NavWrapper>
        <PlaylistsWrapper>
          <FlexBox justifyContent="space-between" alignItems="center">
            <h1>Playlists</h1>
            <Button disabled inline color="transparent" size="xs">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Button>
          </FlexBox>
        </PlaylistsWrapper>
      </Sidebar>
      <Main>
        <TopBar>
          <HeaderPanel>nav / search / user</HeaderPanel>
        </TopBar>
        <AppPanel>{children}</AppPanel>
      </Main>
    </FlexBox>
  );
};

const Sidebar = styled(FlexBox)`
  min-width: 242px;
  width: 21%;
  max-width: 353px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg1};
`;
const NavWrapper = styled.section`
  margin: 1rem 3.8rem;
`;
const PlaylistsWrapper = styled.section`
  margin: 0 8px 2rem 3.8rem;
`;

const TopBar = styled.div`
  width: 100%;
  height: 82px;
`;
const HeaderPanel = styled(FlexBox)`
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.bg2};
  border-bottom: 3px solid ${(props) => props.theme.colors.bg4};
`;

const Logo = styled.div`
  height: 100%;
  position: relative;
  margin: 0 5rem;
`;

const Main = styled(FlexBox)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const AppPanel = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.bg3};
`;
