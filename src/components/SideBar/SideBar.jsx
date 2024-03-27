import sprite from '../../../public/sprite.svg';
import { Form, Formik } from 'formik';
import {
  CastomChekbox,
  CastomRodioBtn,
  ChekboxInp,
  ChekboxItem,
  ChekboxList,
  ChekboxWrapp,
  FiltersBar,
  IconFilter,
  IconInput,
  IconType,
  LocationLabel,
  Locationinput,
  RodioBtnWrapp,
  SearchBtn,
  SideText,
  SideTitle,
  TextChekbox,
} from './SideBar.styled';

export const SideBar = ({ handleSubmit }) => {
  const initialValues = {
    location: '',
    equipment: [],
    type: '',
  };

  const vehicleEquipment = [
    { equipment: 'airConditioner', text: 'AC' },
    { equipment: 'automatic', text: 'Automati' },
    { equipment: 'kitchen', text: 'Kitchen' },
    { equipment: 'TV', text: 'TV' },
    { equipment: 'shower', text: 'Shower/WC' },
  ];

  const vehicleTypes = [
    { type: 'panelTruck', text: 'Van' },
    { type: 'fullyIntegrated', text: 'Fully Integrated' },
    { type: 'alcove', text: 'Alcove' },
  ];

  return (
    <FiltersBar>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <div>
            <SideText>Location</SideText>
            <LocationLabel>
              <Locationinput type="text" name="location" placeholder="City" />
              <IconInput width="18" height="20">
                <use href={`${sprite}#map-pin`} />
              </IconInput>
            </LocationLabel>
          </div>

          <div>
            <SideText>Filters</SideText>
            <ChekboxWrapp>
              <SideTitle>Vehicle equipment</SideTitle>
              <ChekboxList>
                {vehicleEquipment.map((item) => (
                  <ChekboxItem key={item.equipment}>
                    <IconFilter>
                      <use href={`${sprite}#${item.equipment}`} />
                    </IconFilter>
                    <ChekboxInp
                      type="checkbox"
                      name="equipment"
                      value={item.equipment}
                      id={item.equipment}
                    />
                    <CastomChekbox
                      htmlFor={item.equipment}
                      className="castomChekbox"
                    >
                      <TextChekbox>{item.text}</TextChekbox>
                    </CastomChekbox>
                  </ChekboxItem>
                ))}
              </ChekboxList>
            </ChekboxWrapp>

            <RodioBtnWrapp>
              <SideTitle>Vehicle type</SideTitle>
              <ChekboxList>
                {vehicleTypes.map((item) => (
                  <ChekboxItem key={item.type}>
                    <IconType>
                      <use href={`${sprite}#${item.type}`} />
                    </IconType>
                    <ChekboxInp
                      type="radio"
                      name="type"
                      value={item.type}
                      id={item.type}
                    />
                    <CastomRodioBtn
                      htmlFor={item.type}
                      className="castomChekbox"
                    >
                      <TextChekbox>{item.text}</TextChekbox>
                    </CastomRodioBtn>
                  </ChekboxItem>
                ))}
              </ChekboxList>
            </RodioBtnWrapp>
          </div>

          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </Formik>
    </FiltersBar>
  );
};
