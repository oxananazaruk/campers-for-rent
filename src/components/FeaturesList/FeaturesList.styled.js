import styled from 'styled-components';

export const ListFeatures = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  padding: 12px 18px;
  width: 126px;
  height: 44px;
  background-color: ${(p) => p.theme.color.blockFeatures};
`;

export const ListText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;

export const IconFeatures = styled.svg`
  width: 20px;
  height: 20px;
`;
