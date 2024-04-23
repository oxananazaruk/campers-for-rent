import styled from 'styled-components';
import image from '../../../public/img/featured-min.jpg';
import { Link } from 'react-router-dom';

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  padding-bottom: 44px;
  background-image: linear-gradient(
      rgba(16, 24, 40, 0.8),
      rgba(16, 24, 40, 0.8)
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
  padding-top: 150px;
`;

export const MainTitle = styled.h1`
  display: block;
  margin: 0 auto;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.color.blockFeatures};
  width: 800px;
`;

export const MainText = styled.p`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.color.inputs};
  width: 800px;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.color.blockFeatures};
  border: ${(p) => p.theme.border.red};
  border-radius: 200px;
  padding: 17px 18px;
  margin-top: 50px;

  &:hover,
  &:focus {
    text-shadow:
      0 0 5px #d84343,
      0 0 10px #d84343,
      0 0 20px #d84343,
      0 0 40px #d84343;
  }
`;
