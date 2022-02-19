import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faMagnifyingGlass,
  faCompass,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

type ActiveItemProps = {
  active: boolean;
};

export const AppNav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <List>
        <Item active={pathname === "/app"}>
          <Link href="/app" passHref={true}>
            <StyledLink>
              <Icon icon={faMusic} /> <Text>Library</Text>
            </StyledLink>
          </Link>
        </Item>
        <Item active={pathname === "/search"}>
          <Link href="/search" passHref={true}>
            <StyledLink>
              <Icon icon={faMagnifyingGlass} /> <Text>Search</Text>
            </StyledLink>
          </Link>
        </Item>
        <Item active={pathname === "/explore"}>
          <Link href="/explore" passHref={true}>
            <StyledLink>
              <Icon icon={faCompass} /> <Text>Explore</Text>
            </StyledLink>
          </Link>
        </Item>
        <Item active={pathname === "/blocked"}>
          <Link href="/blocked" passHref={true}>
            <StyledLink>
              <Icon icon={faBan} /> <Text>Blocked</Text>
            </StyledLink>
          </Link>
        </Item>
      </List>
    </nav>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li<ActiveItemProps>`
  padding: 0.8rem;
  padding-left: 26%;
  margin-bottom: 0.4rem;
  border-radius: 12px;
  color: ${(props) =>
    props.active ? props.theme.colors.textActive : props.theme.colors.text};
  background-color: ${(props) =>
    props.active ? props.theme.colors.bgActive : "transparent"};
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
`;

const Text = styled.div`
  display: inline-block;
`;
