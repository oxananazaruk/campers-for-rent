import {
  Container,
  MainText,
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
            <div>
              <MainTitle>The best way to rent an campers here</MainTitle>
              <MainText>
                Discover our Camper models and find your holiday home that meets
                all the requirements and makes your travel dreams come true. We
                offer a wide selection of campers and motorhomes from well-known
                brands.
              </MainText>
            </div>
            <StyledLink to="/catalog">Find campers</StyledLink>
          </TitleWrapper>
        </Container>
      </SectionHome>
    </>
  );
};
