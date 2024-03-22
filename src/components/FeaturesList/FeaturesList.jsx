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
          <use href={`${sprite}#users`} />
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
            <use href={`${sprite}#knife`} />
          </IconFeatures>
          <ListText>Kitchen</ListText>
        </ListItem>
      )}
      <ListItem>
        <IconFeatures>
          <use href={`${sprite}#bad`} />
        </IconFeatures>
        <ListText>{details.beds} beds</ListText>
      </ListItem>
      {details.airConditioner > 0 && (
        <ListItem>
          <IconFeatures>
            <use xlinkHref={`${sprite}#ac`} />
          </IconFeatures>
          <ListText>AC</ListText>
        </ListItem>
      )}
    </ListFeatures>
  );
};
