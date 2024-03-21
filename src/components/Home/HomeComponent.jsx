import {
  Container,
  MainTitle,
  SectionHome,
  StyledLink,
  TitleWrapper,
} from './HomeComponent.styled';

export const HomeComponent = () => {
  return (
    <>
      <SectionHome>
        <Container>
          <TitleWrapper>
            <MainTitle>The best way to rent an campers here</MainTitle>
            <StyledLink to="/first">Go to campers</StyledLink>
          </TitleWrapper>
        </Container>
      </SectionHome>
    </>
  );
};
