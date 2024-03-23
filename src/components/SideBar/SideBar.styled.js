import styled from 'styled-components';

export const FiltersBar = styled.div`
  width: 360px;
  padding-top: 100px;
`;

export const SideText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const LocationLabel = styled.label`
  position: relative;
`;

export const Locationinput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${(p) => p.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`;
export const IconInput = styled.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`;

export const IconFilter = styled.svg`
  width: 32px;
  height: 32px;
`;

export const ChekboxWrapp = styled.div`
  margin-top: 14px;
`;

export const SideTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`;

export const RodioBtnWrapp = styled.div`
  margin-top: 32px;
`;
