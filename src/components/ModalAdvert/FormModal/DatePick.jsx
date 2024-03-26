import { useState } from 'react';
import sprite from '../../../../public/sprite.svg';
import { IconSvg, StyledDatePicker } from './FormModal.styled';
import 'react-datepicker/dist/react-datepicker.css';
import enGB from 'date-fns/locale/en-GB';

export const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <StyledDatePicker
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        dateFormat="dd-MM-yyyy"
        placeholderText="Booking date"
        selected={startDate}
        locale={enGB}
        weekStartsOn={1}
        weekdaysShort={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      />
      <IconSvg>
        <use href={`${sprite}#calendar`} />
      </IconSvg>
    </>
  );
};
