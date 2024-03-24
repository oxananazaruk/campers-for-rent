import { Field } from 'formik';
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

export const Locationinput = styled(Field)`
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
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
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
export const ChekboxList = styled.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`;

export const ChekboxItem = styled.li`
  position: relative;
`;

export const CastomChekbox = styled.label`
  border: ${(p) => p.theme.border.grey};
  border-radius: 10px;
  padding: 9px 18px;
  min-width: 100px;
  max-width: 128px;
  height: 95px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  display: block;
  position: relative;
  z-index: 2;
`;

export const ChekboxInp = styled(Field)`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${(p) => p.theme.border.red};
  }
`;

export const TextChekbox = styled.p`
  display: block;
  margin-top: 40px;
  white-space: pre-wrap;
`;

export const RodioBtnWrapp = styled.div`
  margin-top: 32px;
`;

export const IconType = styled.svg`
  width: 40px;
  height: 28px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const SearchBtn = styled.button`
  margin-top: 80px;
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
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
