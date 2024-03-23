import sprite from '../../../public/sprite.svg';
import {
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

            <label>
              <input type="checkbox" name="equipment" value="ac" />
              <IconFilter>
                <use xlinkHref={`${sprite}#ac`} />
              </IconFilter>
              AC
            </label>
            <label>
              <input type="checkbox" name="equipment" value="automatic" />
              Automatic
            </label>
            <label>
              <input type="checkbox" name="equipment" value="kitchen" />
              Kitchen
            </label>
            <label>
              <input type="checkbox" name="equipment" value="tv" />
              TV
            </label>
            <label>
              <input type="checkbox" name="equipment" value="shower/WC" />
              Shower/WC
            </label>
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
