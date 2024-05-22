import { useSelector } from 'react-redux';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';
import { Container } from './FavoritesPage.styled';
import { selectFavorites } from '../../redux/selectors';

const SecondPage = () => {
  const favoritess = useSelector(selectFavorites);

  return (
    <Container>
      {favoritess.length > 0 ? (
        <FavoritesComponent favoritess={favoritess} />
      ) : (
        <h2>There are no favorite adverts yet... </h2>
      )}
    </Container>
  );
};

export default SecondPage;
