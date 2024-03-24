import { IconSvg } from '../../AdvertsCard/AdvertsCard.styled';
import sprite from '../../../../public/sprite.svg';

export const RenderStars = ({ rating }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <IconSvg key={i}>
          <use href={`${sprite}#star`} />
        </IconSvg>
      );
    }
    return stars;
  };

  return <div>{generateStars()}</div>;
};
