import ReactModal from 'react-modal';
import sprite from '../../../public/sprite.svg';
import {
  AdvertImg,
  IconSvg,
  LocationText,
  RatingText,
  StyledImg,
  TitleName,
} from '../AdvertsCard/AdvertsCard.styled';
import {
  Descr,
  DetailsWrapp,
  TitlePrice,
  ImgList,
  InfoWrapp,
  LinkList,
  ModalCloseBtn,
  ModalSvg,
  ModalWrapp,
  OrderWrapp,
  ScrollWrapp,
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
    zIndex: 120,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px 40px 40px 40px',
    borderRadius: '20px',
    minWidth: '982px',
    maxHeight: '850px',
  },
};

ReactModal.setAppElement('#root');

export const ModalAdvert = ({ isOpen, onClose, item }) => {
  const { name, price, rating, location, description, gallery, reviews } = item;

  const [isFeatures, setIsFeatures] = useState(true);
  const [isReviews, setIsReviews] = useState(false);

  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState(null);

  const handleSelectFeatures = () => {
    setIsFeatures(true);
    setIsReviews(false);
  };

  const handleSelectReviews = () => {
    setIsReviews(true);
    setIsFeatures(false);
  };
  const handleSubmit = (values) => {
    setIsOrder(true);
    setOrder(values);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      autoFocus={true}
    >
      <ModalWrapp>
        <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <use href={`${sprite}#x`} />
          </ModalSvg>
        </ModalCloseBtn>

        {!isOrder && (
          <>
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

            <ScrollWrapp>
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
                  <StyledReviews
                    $isReviews={isReviews}
                    onClick={handleSelectReviews}
                  >
                    Reviews
                  </StyledReviews>
                </li>
              </LinkList>
              <DetailsWrapp>
                {isFeatures && <FeaturesModal item={item} />}
                {isReviews && <ReviewsModal reviews={reviews} />}
                {(isReviews || isFeatures) && (
                  <FormModal handleSubmit={handleSubmit} />
                )}
              </DetailsWrapp>
            </ScrollWrapp>
          </>
        )}

        {isOrder && (
          <OrderWrapp>
            <h2>Thank you for your order! We will contact you shortly.</h2>
            <p>
              Your ordered {name} for {order.date}
            </p>
            <AdvertImg>
              <StyledImg src={gallery[0]} alt={name} />
            </AdvertImg>
          </OrderWrapp>
        )}
      </ModalWrapp>
    </ReactModal>
  );
};
