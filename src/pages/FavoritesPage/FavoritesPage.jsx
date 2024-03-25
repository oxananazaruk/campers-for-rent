import { useSelector } from 'react-redux';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';
import { Container } from './FavoritesPage.styled';
import { selectFavorites } from '../../redux/selectors';

const SecondPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length > 0 && <FavoritesComponent favorites={favorites} />}
    </Container>
  );
};

export default SecondPage;