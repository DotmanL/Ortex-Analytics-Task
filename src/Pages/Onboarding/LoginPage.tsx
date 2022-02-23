import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NavBar } from '../../Components/Shared/Components/Navbar';
// import { SignInForm } from '../../Components/Onboarding/SignInForm';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: '1200px',
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Helmet>
        <title>Sign In - Ortex</title>
      </Helmet>
      <NavBar appName="Ortex" />
      <Grid sx={{ mt: 5, py: 1, px: 2 }}>
        <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
          Welcome to Ortex
        </Typography>
      </Grid>
    </Container>
  );
};

export default LoginPage;
