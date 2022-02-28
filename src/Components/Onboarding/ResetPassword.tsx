import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import { InputTextField } from '../Shared/Components/InputTextField';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  formMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 10, 5, 10),
    width: 'auto',
    height: 'auto',
    borderRadius: '0px',
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(4, 4),
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    fontSize: theme.spacing(2.8),
    marginTop: theme.spacing(0),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
    },
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

  },

  button: {
    background: theme.palette.mainBackground.color,
    width: '90%',
    color: theme.palette.text.primary,
    marginTop: theme.spacing(1.5),
    alignSelf: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(1.8),
    padding: theme.spacing(0.5, 0.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(3),
      padding: theme.spacing(0.5, 0.5),
      height: 'auto',
      width: '100%',
    },
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export interface ResetPasswordData {
 email: string;
}

interface ResetPasswordProps {
  // visible: boolean;
  isSubmitting?: boolean;
  // onFormSubmitted: (data: SignUpFormData) => any;
}

export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values: ResetPasswordData, formik: FormikHelpers<ResetPasswordData>) => {
    formik.setSubmitting(false);
  };
  const classes = useStyles();
  // if (!visible) {
  //   return null;
  // }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        errors, touched, isSubmitting, values, handleChange,
      }): React.ReactNode => (
        <Grid container className={classes.main}>
          <Paper elevation={2} className={classes.formMain}>
            <Typography variant="h2" className={classes.header}>
              Reset Password
            </Typography>
            <Form className={classes.formContainer}>
              <Field
                className={classes.formControl}
                variant="outlined"
                id="email"
                type="email"
                name="email"
                label="Email "
                component={InputTextField}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                className={classes.button}
              >
                Reset Password
              </Button>
            </Form>
          </Paper>
        </Grid>
      )}
    </Formik>
  );
};

export default ResetPassword;
