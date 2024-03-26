import { Container, QueryError, Wrapper } from './CatalogPage.styled';
import { useEffect, useState } from 'react';
import { fetchAdverts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { AdvertsList } from '../../components/AdvertsList/AdvertsList';
import { SideBar } from '../../components/SideBar/SideBar';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  const handleSubmit = (values) => {
    setFilters(values);
  };

  const visibleAdverts = adverts.filter((item) => {
    const hasLocation =
      !filters.location ||
      item.location
        .toLowerCase()
        .includes(filters.location.toLowerCase().trim());

    const matchesType = !filters.type || item.form === filters.type;

    const hasEquipment =
      !filters.equipment ||
      filters.equipment.every((equip) => {
        return (
          (Object.prototype.hasOwnProperty.call(item.details, equip) &&
            item.details[equip] !== 0) ||
          equip === item.transmission
        );
      });

    return hasLocation && matchesType && hasEquipment;
  });

  return (
    <Container>
      <Wrapper>
        <SideBar handleSubmit={handleSubmit} />
        {visibleAdverts.length > 0 && (
          <AdvertsList items={visibleAdverts} onLoadMare={handleLoadMore} />
        )}
        {visibleAdverts.length === 0 && !isLoading && (
          <QueryError>
            There are no results matching your search query. Please try changing
            your search parameters!
          </QueryError>
        )}
        {isLoading && <Loader />}
        {isError && <Error />}
      </Wrapper>
    </Container>
  );
};

export default CatalogPage;
