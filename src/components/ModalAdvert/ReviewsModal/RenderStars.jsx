import { IconSvg } from '../../AdvertsCard/AdvertsCard.styled';
import sprite from '../../../../public/sprite.svg';

export const RenderStars = ({ rating }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <IconSvg key={i}>
            <use href={`${sprite}#star`} />
          </IconSvg>
        );
      } else {
        stars.push(
          <IconSvg key={i}>
            <use href={`${sprite}#star2`} />
          </IconSvg>
        );
      }
    }
    return stars;
  };

  return <div>{generateStars()}</div>;
};
