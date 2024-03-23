import sprite from '../../../public/sprite.svg';
import {
  CastomChekbox,
  ChekboxList,
  ChekboxText,
  ChekboxWrapp,
  FiltersBar,
  IconFilter,
  IconInput,
  LocationLabel,
  Locationinput,
  RodioBtnWrapp,
  SideText,
  SideTitle,
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
              <CastomChekbox>
                <IconFilter>
                  <use xlinkHref={`${sprite}#ac`} />
                </IconFilter>
                <ChekboxText>AC</ChekboxText>
                <input type="checkbox" name="equipment" value="ac" />
              </CastomChekbox>
              <CastomChekbox>
                <IconFilter>
                  <use xlinkHref={`${sprite}#automatic`} />
                </IconFilter>
                <ChekboxText>Automatic</ChekboxText>
                <input type="checkbox" name="equipment" value="automatic" />
              </CastomChekbox>
              <CastomChekbox>
                <IconFilter>
                  <use xlinkHref={`${sprite}#knife`} />
                </IconFilter>
                <ChekboxText>Kitchen</ChekboxText>
                <input type="checkbox" name="equipment" value="kitchen" />
              </CastomChekbox>
              <CastomChekbox>
                <IconFilter>
                  <use xlinkHref={`${sprite}#tv`} />
                </IconFilter>
                <ChekboxText>TV</ChekboxText>
                <input type="checkbox" name="equipment" value="tv" />
              </CastomChekbox>
              <CastomChekbox>
                <IconFilter>
                  <use xlinkHref={`${sprite}#shower`} />
                </IconFilter>
                <ChekboxText>Shower/WC</ChekboxText>
                <input type="checkbox" name="equipment" value="shower/WC" />
              </CastomChekbox>
            </ChekboxList>
          </ChekboxWrapp>

          <RodioBtnWrapp>
            <SideTitle>Vehicle type</SideTitle>
          </RodioBtnWrapp>
        </div>

        <button>Search</button>
      </form>
    </FiltersBar>
  );
};
