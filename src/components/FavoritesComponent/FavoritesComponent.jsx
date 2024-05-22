import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { ListAdverts, ListWrapper } from './FavoritesComponent.styled';

export const FavoritesComponent = ({ favoritess }) => {
  return (
    <ListWrapper>
      <h2>You liked these adverts</h2>
      <ListAdverts>
        {favoritess.map((item) => (
          <li key={item._id}>
            <AdvertsCard item={item} />
          </li>
        ))}
      </ListAdverts>
    </ListWrapper>
  );
};
