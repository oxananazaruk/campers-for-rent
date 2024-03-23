import styled from 'styled-components';

export const AdvertWrapper = styled.div`
  border: ${(p) => p.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TitleName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const TitlePrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const FavBtn = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const AdvertImg = styled.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const IconBtn = styled.svg`
  width: 24px;
  height: 24px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const RatingText = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const LocationText = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const Description = styled.p`
  color: ${(p) => p.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`;

export const BtnMore = styled.button`
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background-color: ${(p) => p.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`;
