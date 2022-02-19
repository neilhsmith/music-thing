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

const navItems = [
  {
    href: "/app",
    icon: faMusic,
    title: "Library",
  },
  {
    href: "/search",
    icon: faMagnifyingGlass,
    title: "Search",
  },
  {
    href: "/explore",
    icon: faCompass,
    title: "Explore",
  },
  {
    href: "/blocked",
    icon: faBan,
    title: "Blocked",
  },
];

export const AppNav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <List>
        {navItems &&
          navItems.map((item) => (
            <Item key={item.href} active={pathname === item.href}>
              <Link href={item.href} passHref>
                <StyledLink>
                  <Icon icon={item.icon} /> <Text>{item.title}</Text>
                </StyledLink>
              </Link>
            </Item>
          ))}
      </List>
    </nav>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li<{ active: boolean }>`
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
