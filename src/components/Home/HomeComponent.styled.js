import styled from 'styled-components';
import image from '../../../public/img/featured-min.jpg';
import { theme } from '../../vars.js';
import { Link } from 'react-router-dom';

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  padding-bottom: 44px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
    url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  padding-top: 200px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${theme.color.blockzFeatures};
  width: 550px;
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${theme.color.blockzFeatures};
  border: ${theme.border.red};
  border-radius: 10px;
  padding: 17px 18px;
`;
