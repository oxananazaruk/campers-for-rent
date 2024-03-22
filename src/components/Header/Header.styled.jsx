import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(100%);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    text-shadow:
      0 0 5px #d84343,
      0 0 10px #d84343,
      0 0 20px #d84343,
      0 0 40px #d84343;
  }
`;
