import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledInput,
  Error,
  StyledButton,
  StyledForm,
  FormTitle,
  FormText,
  InputsWrapp,
  StyledTextarea,
  InpWrapp,
} from './FormModal.styled';
import { DatePick } from './DatePick';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('Required'),
  email: Yup.string().email('It must be valid email').required('Required'),
  date: Yup.date().required('Required'),
  comment: Yup.string(),
});

export const FormModal = ({ handleSubmit }) => {
  const initialValues = {
    name: '',
    email: '',
    date: null,
    comment: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        const formattedDate = new Date(values.date).toLocaleDateString('en-GB');
        const updatedValues = { ...values, date: formattedDate };
        handleSubmit(updatedValues);
      }}
    >
      <StyledForm autoComplete="off">
        <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>

        <InputsWrapp>
          <InpWrapp>
            <StyledInput type="text" name="name" placeholder="Name" />
            <Error name="name" component="p" />
          </InpWrapp>

          <InpWrapp>
            <StyledInput type="email" name="email" placeholder="Email" />
            <Error name="email" component="p" />
          </InpWrapp>

          <InpWrapp>
            <DatePick name="date" />
          </InpWrapp>

          <div>
            <StyledTextarea
              as="textarea"
              name="comment"
              placeholder="Comment"
              type="text"
              rows="5"
            />
            <Error name="comment" component="p" />
          </div>
        </InputsWrapp>

        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </Formik>
  );
};
