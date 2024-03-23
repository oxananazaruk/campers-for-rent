import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { ListAdverts, ListWrapper, LoadBtn } from './AdvertsList.styled';

export const AdvertsList = ({ items, onLoadMare }) => {
  return (
    <ListWrapper>
      <ListAdverts>
        {items.map((item) => (
          <li key={item._id}>
            <AdvertsCard item={item} />
          </li>
        ))}
      </ListAdverts>
      <LoadBtn type="button" onClick={onLoadMare}>
        Load more
      </LoadBtn>
    </ListWrapper>
  );
};
