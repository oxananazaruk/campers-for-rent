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
  ImgList,
  InfoWrapp,
  LinkList,
  ModalCloseBtn,
  ModalSvg,
  ModalWrapp,
  StyledLink,
} from './ModalAdvert.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    borderRadius: '20px',
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
            <StyledLink>Features</StyledLink>
          </li>
          <li>
            <StyledLink>Reviews</StyledLink>
          </li>
        </LinkList>
      </ModalWrapp>
    </ReactModal>
  );
};
