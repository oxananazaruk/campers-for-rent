import sprite from '../../../public/sprite.svg';
import { Form, Formik } from 'formik';
import {
  CastomChekbox,
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
              <Locationinput
                type="text"
                name="location"
                placeholder="Kyiv, Ukraine"
              />
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
                <ChekboxItem>
                  <IconFilter>
                    <use href={`${sprite}#ac`} />
                  </IconFilter>
                  <ChekboxInp
                    type="checkbox"
                    name="equipment"
                    value="airConditioner"
                    id="ac"
                  />
                  <CastomChekbox htmlFor="ac" className="castomChekbox">
                    <TextChekbox>AC</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconFilter>
                    <use href={`${sprite}#automatic`} />
                  </IconFilter>
                  <ChekboxInp
                    type="checkbox"
                    name="equipment"
                    value="automatic"
                    id="automatic"
                  />
                  <CastomChekbox htmlFor="automatic" className="castomChekbox">
                    <TextChekbox>Automatic</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconFilter>
                    <use href={`${sprite}#knife`} />
                  </IconFilter>
                  <ChekboxInp
                    type="checkbox"
                    name="equipment"
                    value="kitchen"
                    id="kitchen"
                  />
                  <CastomChekbox htmlFor="kitchen" className="castomChekbox">
                    <TextChekbox>Kitchen</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconFilter>
                    <use href={`${sprite}#tv`} />
                  </IconFilter>

                  <ChekboxInp
                    type="checkbox"
                    name="equipment"
                    value="TV"
                    id="tv"
                  />
                  <CastomChekbox htmlFor="tv" className="castomChekbox">
                    <TextChekbox>TV</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconFilter>
                    <use href={`${sprite}#shower`} />
                  </IconFilter>

                  <ChekboxInp
                    type="checkbox"
                    name="equipment"
                    value="shower"
                    id="shower"
                  />
                  <CastomChekbox htmlFor="shower" className="castomChekbox">
                    <TextChekbox>Shower/WC</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>
              </ChekboxList>
            </ChekboxWrapp>

            <RodioBtnWrapp>
              <SideTitle>Vehicle type</SideTitle>
              <ChekboxList>
                <ChekboxItem>
                  <IconType>
                    <use href={`${sprite}#camper3`} />
                  </IconType>
                  <ChekboxInp
                    type="radio"
                    name="type"
                    value="panelTruck"
                    id="van"
                  />
                  <CastomChekbox htmlFor="van" className="castomChekbox">
                    <TextChekbox>Van</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconType>
                    <use href={`${sprite}#camper2`} />
                  </IconType>
                  <ChekboxInp
                    type="radio"
                    name="type"
                    value="fullyIntegrated"
                    id="fullyIntegrated"
                  />
                  <CastomChekbox
                    htmlFor="fullyIntegrated"
                    className="castomChekbox"
                  >
                    <TextChekbox>Fully Integrated</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>

                <ChekboxItem>
                  <IconType>
                    <use href={`${sprite}#camper`} />
                  </IconType>
                  <ChekboxInp
                    type="radio"
                    name="type"
                    value="alcove"
                    id="alcove"
                  />
                  <CastomChekbox htmlFor="alcove" className="castomChekbox">
                    <TextChekbox>Alcove</TextChekbox>
                  </CastomChekbox>
                </ChekboxItem>
              </ChekboxList>
            </RodioBtnWrapp>
          </div>

          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </Formik>
    </FiltersBar>
  );
};
