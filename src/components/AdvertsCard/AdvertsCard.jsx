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

export const AdvertsCard = ({ item }) => {
  const {
    name,
    price,
    rating,
    location,
    // adults,
    // children,
    // engine,
    // transmission,
    // form,
    // length,
    // width,
    // height,
    // tank,
    // consumption,
    description,
    gallery,
    reviews,
  } = item;

  const formatPrice = price.toFixed(2);

  return (
    <AdvertWrapper>
      <AdvertImg>
        <StyledImg src={gallery[1]} alt={name} />
      </AdvertImg>

      <div>
        <PriceWrapper>
          <TitleName>{name}</TitleName>
          <BtnWrapper>
            <TitlePrice>€{formatPrice}</TitlePrice>
            <FavBtn type="button">
              <IconBtn>
                <use href={`${sprite}#heartDefault`} />
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

        <BtnMore type="button">Show more</BtnMore>
      </div>
    </AdvertWrapper>
  );
};
