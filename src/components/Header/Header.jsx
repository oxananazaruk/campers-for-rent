import {
  HeaderContainer,
  NavHeader,
  Navigation,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <NavHeader>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
      </HeaderContainer>
    </NavHeader>
  );
};
