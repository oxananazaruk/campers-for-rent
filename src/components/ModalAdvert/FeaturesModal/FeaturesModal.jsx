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

  const vehicleDetails = [
    { name: 'Form', value: form },
    { name: 'Length', value: length },
    { name: 'Width', value: width },
    { name: 'Height', value: height },
    { name: 'Tank', value: tank },
    { name: 'Consumption', value: consumption },
  ];

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
        {details.beds > 0 && (
          <ListItem>
            <IconFeatures>
              <use href={`${sprite}#beds`} />
            </IconFeatures>
            <ListText>{details.beds} beds</ListText>
          </ListItem>
        )}

        {details?.airConditioner > 0 && (
          <ListItem>
            <IconFeatures>
              <use xlinkHref={`${sprite}#airConditioner`} />
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
        {vehicleDetails.map((detail) => (
          <DetailsItem key={detail.name}>
            <FeaturesText>{detail.name}</FeaturesText>
            <FeaturesText>{detail.value}</FeaturesText>
          </DetailsItem>
        ))}
      </DetailsList>
    </ListWrapp>
  );
};
