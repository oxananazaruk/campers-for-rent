import {
  IconFeatures,
  ListFeatures,
  ListItem,
  ListText,
} from '../../FeaturesList/FeaturesList.styled';
import sprite from '../../../../public/sprite.svg';
import {
  DetailsItem,
  DetailsList,
  DetailsTitle,
  FeaturesText,
  ListWrapp,
} from './FeaturesModal.styled';

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
        <ListItem>
          <IconFeatures>
            <use href={`${sprite}#beds`} />
          </IconFeatures>
          <ListText>{details.beds} beds</ListText>
        </ListItem>

        {details?.airConditioner > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#ac`} />
            </IconFeatures>
            <ListText>AC</ListText>
          </ListItem>
        )}

        {details?.airConditioner > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#airConditioner2`} />
            </IconFeatures>
            <ListText>air conditioner</ListText>
          </ListItem>
        )}

        {details?.CD > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#CD`} />
            </IconFeatures>
            <ListText>CD</ListText>
          </ListItem>
        )}

        {details?.radio > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#radio`} />
            </IconFeatures>
            <ListText>Radio</ListText>
          </ListItem>
        )}

        {details?.hob > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#hob`} />
            </IconFeatures>
            <ListText>{details.hob} hob</ListText>
          </ListItem>
        )}

        {details?.toilet > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#toilet`} />
            </IconFeatures>
            <ListText> Toilet</ListText>
          </ListItem>
        )}

        {details?.freezer > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#freezer`} />
            </IconFeatures>
            <ListText>Freezer</ListText>
          </ListItem>
        )}

        {details?.microwave > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#microwave`} />
            </IconFeatures>
            <ListText>Microwave</ListText>
          </ListItem>
        )}

        {details?.gas && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#gas`} />
            </IconFeatures>
            <ListText>{details.gas} gas</ListText>
          </ListItem>
        )}

        {details?.water && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#water`} />
            </IconFeatures>
            <ListText>{details.water} water</ListText>
          </ListItem>
        )}
      </ListFeatures>

      <DetailsTitle>Vehicle details</DetailsTitle>
      <DetailsList>
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
      </DetailsList>
    </ListWrapp>
  );
};
