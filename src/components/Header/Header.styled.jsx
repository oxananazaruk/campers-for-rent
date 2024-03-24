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
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  padding: 8px 16px;
  min-width: 132px;
  text-align: center;
  color: ${(p) => p.theme.color.main};
  border: none;
  border-radius: 12px;
  background-color: rgba(242, 244, 247, 0.5);
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
