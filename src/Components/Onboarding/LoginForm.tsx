import React from 'react';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { InputTextField } from '../Shared/Components/InputTextField';
import { CustomizedDialogs } from '../Shared/Components/ModalComponent';
import ResetPassword from './ResetPassword';
import { TradingData } from '../Shared/Components/TradingData';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
    },
  },
  formMain: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(8, 5, 0, 5),
    width: 'auto',
    height: '100%',
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
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    fontSize: theme.spacing(3.2),
    marginTop: theme.spacing(0),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  forgotPassword: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  links: {
    fontSize: theme.spacing(2.0),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
    },
  },
  button: {
    background: theme.palette.mainBackground.color,
    width: '90%',
    color: theme.palette.text.primary,
    marginTop: theme.spacing(0),
    alignSelf: 'flex-start',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(2.4),
    padding: theme.spacing(0.5, 0.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.0),
      marginTop: theme.spacing(1.5),
      padding: theme.spacing(2, 2),
      height: '40px',
      width: '100%',
    },
  },
  tradingDataContainer: {
    display: 'FLEX',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%',
    },
  },
}));

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export interface LoginFormData {
 username: string;
  password: string;
}

interface LoginFormProps {
  // visible: boolean;
  isSubmitting?: boolean;
  // onFormSubmitted: (data: SignUpFormData) => any;
}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values: LoginFormData, formik: FormikHelpers<LoginFormData>) => {
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
              Log in to your account
            </Typography>
            <Form className={classes.formContainer}>
              <Field
                className={classes.formControl}
                variant="outlined"
                id="username"
                type="username"
                name="username"
                label="Username"
                component={InputTextField}
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <Field
                className={classes.formControl}
                variant="outlined"
                id="password"
                name="password"
                type="password"
                label="Password"
                component={InputTextField}
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Grid
                item
                xs={12}
                className={classes.forgotPassword}
              >
                <CustomizedDialogs linkTitle="Reset Password?" component={<ResetPassword isSubmitting={false} />} />
              </Grid>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                className={classes.button}
              >
                Log In
              </Button>
            </Form>
            {mobile
            && (
            <Grid className={classes.tradingDataContainer}>
              <TradingData />
            </Grid>
            )}
          </Paper>

        </Grid>
      )}
    </Formik>
  );
};
