import sprite from '../../../public/sprite.svg';
import {
  CastomChekbox,
  ChekboxInp,
  ChekboxItem,
  ChekboxList,
  ChekboxWrapp,
  FiltersBar,
  IconFilter,
  IconInput,
  LocationLabel,
  Locationinput,
  RodioBtnWrapp,
  SearchBtn,
  SideText,
  SideTitle,
  TextChekbox,
} from './SideBar.styled';

export const SideBar = () => {
  return (
    <FiltersBar>
      <form>
        <div>
          <SideText>Location</SideText>
          <LocationLabel>
            <Locationinput type="text" placeholder="Kyiv, Ukraine" />
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
                  value="ac"
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
                  value="tv"
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
                  value="shower/WC"
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
          </RodioBtnWrapp>
        </div>

        <SearchBtn>Search</SearchBtn>
      </form>
    </FiltersBar>
  );
};
