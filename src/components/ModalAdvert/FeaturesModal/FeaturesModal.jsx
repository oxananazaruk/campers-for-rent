import {
  IconFeatures,
  ListFeatures,
  ListItem,
  ListText,
} from '../../FeaturesList/FeaturesList.styled';
import sprite from '../../../../public/sprite.svg';
import { DetailsItem, FeaturesText, ListWrapp } from './FeaturesModal.styled';

export const FeaturesModal = ({ item }) => {
  const {
    adults,
    engine,
    transmission,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = item;

  return (
    <ListWrapp>
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

        {details.airConditioner > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#air-conditioner`} />
            </IconFeatures>
            <ListText>air conditioner</ListText>
          </ListItem>
        )}

        {details.CD > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#cd`} />
            </IconFeatures>
            <ListText>CD</ListText>
          </ListItem>
        )}

        {details.radio > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#radio`} />
            </IconFeatures>
            <ListText>Radio</ListText>
          </ListItem>
        )}

        {details.hob > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#hob`} />
            </IconFeatures>
            <ListText>{details.hob} hob</ListText>
          </ListItem>
        )}
      </ListFeatures>

      <h3>Vehicle details</h3>
      <ul>
        <DetailsItem>
          <FeaturesText>Form</FeaturesText>
          <FeaturesText>{form}</FeaturesText>
        </DetailsItem>
        <DetailsItem>
          <FeaturesText>Length</FeaturesText>
          <FeaturesText>{length}</FeaturesText>
        </DetailsItem>
        <DetailsItem>
          <FeaturesText>Width</FeaturesText>
          <FeaturesText>{width}</FeaturesText>
        </DetailsItem>
        <DetailsItem>
          <FeaturesText>Height</FeaturesText>
          <FeaturesText>{height}</FeaturesText>
        </DetailsItem>
        <DetailsItem>
          <FeaturesText>Tank</FeaturesText>
          <FeaturesText>{tank}</FeaturesText>
        </DetailsItem>
        <DetailsItem>
          <FeaturesText>Consumption</FeaturesText>
          <FeaturesText>{consumption}</FeaturesText>
        </DetailsItem>
      </ul>
    </ListWrapp>
  );
};
