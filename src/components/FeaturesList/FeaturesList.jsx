import sprite from '../../../public/sprite.svg';
import {
  IconFeatures,
  ListFeatures,
  ListItem,
  ListText,
} from './FeaturesList.styled';

export const FeaturesList = ({ item }) => {
  const { adults, engine, transmission, details } = item;

  return (
    <ListFeatures>
      <ListItem>
        <IconFeatures>
          <use href={`${sprite}#adults`} />
        </IconFeatures>
        <ListText>{adults} adults</ListText>
      </ListItem>
      {transmission === 'automatic' && (
        <ListItem>
          <IconFeatures width="20" height="20">
            <use href={`${sprite}#automatic`} />
          </IconFeatures>
          <ListText>Automatic</ListText>
        </ListItem>
      )}
      {engine === 'petrol' && (
        <ListItem>
          <IconFeatures>
            <use href={`${sprite}#petrol`} />
          </IconFeatures>
          <ListText>Petrol</ListText>
        </ListItem>
      )}
      {details.kitchen > 0 && (
        <ListItem>
          <IconFeatures>
            <use href={`${sprite}#kitchen`} />
          </IconFeatures>
          <ListText>Kitchen</ListText>
        </ListItem>
      )}
      {details.beds > 0 && (
        <ListItem>
          <IconFeatures>
            <use href={`${sprite}#beds`} />
          </IconFeatures>
          <ListText>{details.beds} beds</ListText>
        </ListItem>
      )}
      {details.airConditioner > 0 && (
        <ListItem>
          <IconFeatures>
            <use xlinkHref={`${sprite}#airConditioner`} />
          </IconFeatures>
          <ListText>AC</ListText>
        </ListItem>
      )}
    </ListFeatures>
  );
};
