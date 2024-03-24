import styled from 'styled-components';

const getBorderFeatures = (props) => {
  return props.$isFeatures ? '5px solid #e44848' : 'none';
};

const getBorderReviews = (props) => {
  return props.$isReviews ? '5px solid #e44848' : 'none';
};

export const ModalWrapp = styled.div`
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;

  width: 32px;
  height: 32px;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const ModalSvg = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${(p) => p.theme.color.main};
`;

export const InfoWrapp = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ImgList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const Descr = styled.p`
  color: ${(p) => p.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 902px;
  height: 70px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StyledFeatures = styled.p`
  color: ${(p) => p.theme.color.main};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: ${getBorderFeatures};
`;

export const StyledReviews = styled.p`
  color: ${(p) => p.theme.color.main};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: ${getBorderReviews};
`;
