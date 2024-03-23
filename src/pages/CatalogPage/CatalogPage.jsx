import { Container, Wrapper } from './CatalogPage.styled';
import { useEffect, useState } from 'react';
import { fetchAdverts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { AdvertsList } from '../../components/AdvertsList/AdvertsList';
import { SideBar } from '../../components/SideBar/SideBar';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  return (
    <Container>
      <Wrapper>
        <SideBar />
        {adverts.length > 0 && (
          <AdvertsList items={adverts} onLoadMare={handleLoadMore} />
        )}
      </Wrapper>
    </Container>
  );
};

export default CatalogPage;
