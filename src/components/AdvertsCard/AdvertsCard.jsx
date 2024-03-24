import { useEffect, useState } from 'react';
import sprite from '../../../public/sprite.svg';
import { FeaturesList } from '../FeaturesList/FeaturesList';
import {
  AdvertImg,
  AdvertWrapper,
  BtnMore,
  BtnWrapper,
  Description,
  FavBtn,
  IconBtn,
  IconSvg,
  InfoWrapper,
  LocationText,
  PriceWrapper,
  RatingText,
  StyledImg,
  TitleName,
  TitlePrice,
} from './AdvertsCard.styled';
import { addFavorites, removeFavorites } from '../../redux/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { ModalAdvert } from '../ModalAdvert/ModalAdvert';

export const AdvertsCard = ({ item }) => {
  const { name, price, rating, location, description, gallery, reviews } = item;

  const dispatch = useDispatch();

  const formatPrice = price.toFixed(2);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);
  const [isModalOpen, setIsModal] = useState(false);

  useEffect(() => {
    if (favorites.some((fav) => fav._id === item._id)) {
      setIsFavorite(true);
    }
  }, [favorites, item._id]);

  const iconHeart = isFavorite ? 'heardPressed' : 'heartDefault';

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addFavorites(item));
    } else {
      dispatch(removeFavorites(item._id));
    }
  };

  return (
    <>
      <AdvertWrapper>
        <AdvertImg>
          <StyledImg src={gallery[0]} alt={name} />
        </AdvertImg>

        <div>
          <PriceWrapper>
            <TitleName>{name}</TitleName>
            <BtnWrapper>
              <TitlePrice>€{formatPrice}</TitlePrice>
              <FavBtn type="button" onClick={handleSelectFavorite}>
                <IconBtn>
                  <use href={`${sprite}#${iconHeart}`} />
                </IconBtn>
              </FavBtn>
            </BtnWrapper>
          </PriceWrapper>

          <InfoWrapper>
            <RatingText>
              <IconSvg>
                <use href={`${sprite}#star`} />
              </IconSvg>
              {rating} ({reviews.length} Reviews)
            </RatingText>

            <LocationText>
              <IconSvg>
                <use href={`${sprite}#map-pin`} />
              </IconSvg>
              {location}
            </LocationText>
          </InfoWrapper>

          <Description>{description}</Description>

          <FeaturesList item={item} />

          <BtnMore type="button" onClick={() => setIsModal(true)}>
            Show more
          </BtnMore>
        </div>
      </AdvertWrapper>

      {isModalOpen && (
        <ModalAdvert
          isOpen={isModalOpen}
          onClose={() => setIsModal(false)}
          item={item}
        />
      )}
    </>
  );
};
