import React from 'react';
import { makeStyles } from '@mui/styles';
// import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NavBar } from '../../Components/Shared/Components/Navbar';
import { LoginForm } from '../../Components/Onboarding/LoginForm';

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
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

  },
  dataContainer: {
    display: 'flex',
    background: theme.palette.background.default,
    borderLeft: '5px solid red',
    width: '65%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.root}>
      <Helmet>
        <title>Sign In - Ortex</title>
      </Helmet>
      <NavBar appName="Ortex" />
      <Grid container className={classes.container}>
        <Grid className={classes.loginFormContainer}>
          <LoginForm isSubmitting={false} />
        </Grid>
        <Grid className={classes.dataContainer}>
          <Typography variant="h4" sx={{ color: theme.palette.text.primary, mt: 1 }}>
            Welcome to Ortex
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
