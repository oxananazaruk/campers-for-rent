import { useSelector } from 'react-redux';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { ListAdverts, ListWrapper, LoadBtn } from './AdvertsList.styled';
import { selectMessage } from '../../redux/selectors';

export const AdvertsList = ({ items, onLoadMare }) => {
  const message = useSelector(selectMessage);

  return (
    <ListWrapper>
      <ListAdverts>
        {items.map((item) => (
          <li key={item._id}>
            <AdvertsCard item={item} />
          </li>
        ))}
      </ListAdverts>

      {message ? (
        <p>{message}</p>
      ) : (
        <LoadBtn type="button" onClick={onLoadMare}>
          Load more
        </LoadBtn>
      )}
    </ListWrapper>
  );
};
