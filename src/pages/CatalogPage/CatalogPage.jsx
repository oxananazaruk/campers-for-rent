import { Container } from './CatalogPage.styled';
import { useEffect } from 'react';
import { fetchAdverts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { AdvertsList } from '../../components/AdvertsList/AdvertsList';

const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Container>
      {adverts.length > 0 && <AdvertsList items={adverts} />}
    </Container>
  );
};

export default CatalogPage;
