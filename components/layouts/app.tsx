import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCog, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../flexBox";
import { AppNav } from "../appNav";
import { Button } from "../button";
import Dropdown from "../dropdown";

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
          <HeaderPanel>
            <div>nav / search</div>
            <AlignRight>
              <Dropdown
                toggle={
                  <Button inline color="transparent" size="xs">
                    <FontAwesomeIcon icon={faCog} size="lg" />
                  </Button>
                }
                items={[
                  <Dropdown.Item>
                    <Link href="/settings" passHref>
                      <StyledLink>
                        <FontAwesomeIcon icon={faCog} size="sm" /> Settings
                      </StyledLink>
                    </Link>
                  </Dropdown.Item>,
                  <Dropdown.Item>
                    <Link href="/logout" passHref>
                      <StyledLink>
                        <FontAwesomeIcon icon={faSignOut} size="sm" /> Log Out
                      </StyledLink>
                    </Link>
                  </Dropdown.Item>,
                ]}
              />
            </AlignRight>
          </HeaderPanel>
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
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.bg2};
  border-bottom: 3px solid ${(props) => props.theme.colors.bg4};
`;
const AlignRight = styled.div`
  margin-left: auto;
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
  padding: 3rem 3rem;
  background-color: ${(props) => props.theme.colors.bg3};
`;
const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
