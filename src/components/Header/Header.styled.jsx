import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 50%;

  transform: translateX(-50%);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  color: ${(p) => p.theme.color.main};
  border: none;
  transition:
    color 0.3s,
    border-bottom 0.3s;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.color.buttons};
    border-bottom: ${(p) => p.theme.border.red};
  }

  &.active {
    color: ${(p) => p.theme.color.buttons};
    border-bottom: ${(p) => p.theme.border.red};
  }
`;
