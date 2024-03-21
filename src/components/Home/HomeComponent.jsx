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
            <StyledLink to="/catalog">Find campers</StyledLink>
          </TitleWrapper>
        </Container>
      </SectionHome>
    </>
  );
};
