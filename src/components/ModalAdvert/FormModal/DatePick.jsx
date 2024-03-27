import sprite from '../../../../public/sprite.svg';
import { IconCalendar, StyledDatePicker, ErrorDate } from './FormModal.styled';
import 'react-datepicker/dist/react-datepicker.css';
import enGB from 'date-fns/locale/en-GB';
import { useField } from 'formik';

export const DatePick = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (date) => {
    helpers.setValue(date);
  };

  return (
    <>
      <StyledDatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={handleChange}
        minDate={new Date()}
        dateFormat="dd-MM-yyyy"
        placeholderText="Booking date"
        locale={enGB}
        weekStartsOn={1}
        weekdaysShort={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      />
      {meta.touched && meta.error ? <ErrorDate>{meta.error}</ErrorDate> : null}

      <IconCalendar>
        <use href={`${sprite}#calendar`} />
      </IconCalendar>
    </>
  );
};
