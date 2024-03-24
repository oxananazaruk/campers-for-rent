import styled from 'styled-components';

export const ListWrapp = styled.div`
  width: 430px;
  margin-top: 44px;
`;

export const NameLeter = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.blockFeatures};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.buttons};
  text-align: center;
  padding: 15px 21px;
`;

export const StyledName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`;

export const NameWrapp = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledComment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.text};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
