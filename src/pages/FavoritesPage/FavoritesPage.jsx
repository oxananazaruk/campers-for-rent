import { useSelector } from 'react-redux';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';
import { Container } from './FavoritesPage.styled';
import { selectFavorites } from '../../redux/selectors';

const SecondPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length > 0 ? (
        <FavoritesComponent favorites={favorites} />
      ) : (
        <h2>There are no favorite adverts yet... </h2>
      )}
    </Container>
  );
};

export default SecondPage;
