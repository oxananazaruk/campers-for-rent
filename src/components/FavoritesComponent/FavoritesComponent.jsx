import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';

export const FavoritesComponent = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <h2>Your favorite adverts</h2>
      <ul>
        {favorites.map((item) => (
          <li key={item._id}>
            <AdvertsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
