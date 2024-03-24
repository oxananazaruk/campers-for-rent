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
} from './FormModal.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('Required'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'It must be valid email')
    .required('Required'),
  date: Yup.date().required('Required'),
  comment: Yup.string(),
});

export const FormModal = ({ handleSubmit }) => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <StyledForm autoComplete="off">
        <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>

        <InputsWrapp>
          <div>
            <StyledInput type="text" name="name" placeholder="Name" />
            <Error name="name" component="p" />
          </div>

          <div>
            <StyledInput type="email" name="email" placeholder="Email" />
            <Error name="email" component="p" />
          </div>

          <div>
            <StyledInput name="date" placeholder="Booking date" type="date" />
            <Error name="date" component="p" />
          </div>

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
