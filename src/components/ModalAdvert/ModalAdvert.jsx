import ReactModal from 'react-modal';
import sprite from '../../../public/sprite.svg';
import {
  AdvertImg,
  IconSvg,
  LocationText,
  RatingText,
  StyledImg,
  TitleName,
  TitlePrice,
} from '../AdvertsCard/AdvertsCard.styled';
import {
  Descr,
  DetailsWrapp,
  ImgList,
  InfoWrapp,
  LinkList,
  ModalCloseBtn,
  ModalSvg,
  ModalWrapp,
  StyledFeatures,
  StyledReviews,
} from './ModalAdvert.styled';
import { useState } from 'react';
import { FeaturesModal } from './FeaturesModal/FeaturesModal';
import { ReviewsModal } from './ReviewsModal/ReviewsModal';
import { FormModal } from './FormModal/FormModal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
    zIndex: 100,
    overflowY: 'scroll',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 40,
    borderRadius: '20px',
    minWidth: '982px',
    minHeight: '720px',
  },
};

ReactModal.setAppElement('#root');

export const ModalAdvert = ({ isOpen, onClose, item }) => {
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

  const [isFeatures, setIsFeatures] = useState(false);
  const [isReviews, setIsReviews] = useState(false);

  const handleSelectFeatures = () => {
    setIsFeatures(true);
    setIsReviews(false);
  };

  const handleSelectReviews = () => {
    setIsReviews(true);
    setIsFeatures(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel=""
    >
      <ModalWrapp>
        <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <use href={`${sprite}#x`} />
          </ModalSvg>
        </ModalCloseBtn>
        <TitleName>{name}</TitleName>
        <InfoWrapp>
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
        </InfoWrapp>
        <TitlePrice>€{price.toFixed(2)}</TitlePrice>
        <ImgList>
          {gallery.map((image, index) => (
            <li key={index}>
              <AdvertImg>
                <StyledImg src={image} alt={name} />
              </AdvertImg>
            </li>
          ))}
        </ImgList>
        <Descr>{description}</Descr>
        <LinkList>
          <li>
            <StyledFeatures
              $isFeatures={isFeatures}
              onClick={handleSelectFeatures}
            >
              Features
            </StyledFeatures>
          </li>
          <li>
            <StyledReviews $isReviews={isReviews} onClick={handleSelectReviews}>
              Reviews
            </StyledReviews>
          </li>
        </LinkList>
        <DetailsWrapp>
          {isFeatures && <FeaturesModal item={item} />}
          {isReviews && <ReviewsModal item={item} />}
          {(isReviews || isFeatures) && <FormModal />}
        </DetailsWrapp>
      </ModalWrapp>
    </ReactModal>
  );
};
