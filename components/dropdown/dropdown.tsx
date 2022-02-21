import {
  useState,
  useRef,
  forwardRef,
  ReactNode,
  RefObject,
  ForwardedRef,
  useEffect,
} from "react";
import styled from "styled-components";
import { useClickOutside } from "../../utils/useClickOutside";

type DropdownProps = {
  toggle: ReactNode;
  items: ReactNode[];
};

type ToggleProps = {
  children: ReactNode;
  onClick: () => void;
};

type MenuProps = {
  children: ReactNode;
  visible: boolean;
  ref: RefObject<HTMLDivElement>;
};

type ItemProps = {
  children: ReactNode;
  onClick: EventListener;
};

type DividerProps = {};

const Dropdown = ({ toggle, items }: DropdownProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);
  const setVisibilityOff = () => setVisible(false);

  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, setVisibilityOff, [visible]);

  return (
    <DropdownWrapper>
      <Toggle onClick={toggleVisibility}>{toggle}</Toggle>
      <Menu ref={menuRef} visible={visible}>
        {items &&
          items.map((item, i) => (
            <Item key={i} onClick={setVisibilityOff}>
              {item}
            </Item>
          ))}
      </Menu>
    </DropdownWrapper>
  );
};

const Toggle = ({ children, onClick }: ToggleProps) => {
  return <ToggleWrapper onClick={onClick}>{children}</ToggleWrapper>;
};

const Menu = forwardRef(
  ({ children, visible }: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <MenuWrapper ref={ref} visible={visible}>
        {children}
      </MenuWrapper>
    );
  }
);

const Item = ({ children, onClick }: ItemProps) => {
  return <ItemWrapper onClick={onClick}>{children}</ItemWrapper>;
};

const Divider = () => {
  return <div>divider</div>;
};

export default Object.assign(Dropdown, {
  Toggle,
  Menu,
  Item,
  Divider,
});

const DropdownWrapper = styled.div`
  position: relative;
`;

const ToggleWrapper = styled.div``;

const MenuWrapper = styled.div<{ visible: boolean; ref: any }>`
  position: absolute;
  right: 0;
  margin-top: 8px;
  padding: 2rem 0;
  border-radius: 8px;
  min-width: 160px;
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: ${(props) => props.theme.colors.bg4};
`;

const ItemWrapper = styled.div<{ onClick: any }>`
  margin-bottom: 1.8rem;
  padding: 0 1rem;
  font-weight: ${(props) => props.theme.weights.accent};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.textActive};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
