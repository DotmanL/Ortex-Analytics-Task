import React from 'react';
import { makeStyles } from '@mui/styles';
// import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import { NavBar } from '../../Components/Shared/Components/Navbar';
import { LoginForm } from '../../Components/Onboarding/LoginForm';
import LandingPage from '../../Components/Onboarding/LandingPage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      width: '100%',
      background: 'purple',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  loginFormContainer: {
    width: '35%',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

  },
  landingPageContainer: {
    display: 'flex',
    background: theme.palette.mainBackground.color,
    // background: 'red',
    width: '65%',
    padding: theme.spacing(8, 3, 3, 15),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Grid container className={classes.root}>
      <Helmet>
        <title>Sign In - Ortex</title>
      </Helmet>
      <NavBar appName="O R T E X" />
      <Grid container className={classes.container}>
        <Grid className={classes.loginFormContainer}>
          <LoginForm isSubmitting={false} />
        </Grid>
        <Grid className={classes.landingPageContainer}>
          <LandingPage />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
