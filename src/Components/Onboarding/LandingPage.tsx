import React from 'react';
import { makeStyles } from '@mui/styles';
// import Container from '@mui/material/Container';
// import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TradingData from './TradingData';
import financial from './assets/uanalyticsmain.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    backgroundImage: `url(${financial})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    // border: '2px solid red',
    // height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    alignItems: 'flex-start',
    height: '100px',
    padding: theme.spacing(1),
    marginLeft: '-140px',
    marginTop: '-70px',
  },
  introText: {
    fontWeight: theme.typography.fontWeightMedium,
    width: '60%',
    fontSize: theme.spacing(2.4),
    color: 'white',
  },
  tradingDataContainer: {
    marginLeft: '220px',
    marginTop: '60px',
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.container}>
        <Grid>
          <Typography variant="h3" className={classes.introText}>
            Make smarter trades with ORTEX&#39;s
            award-winning stock-data & ideas platform
          </Typography>
        </Grid>
        <Grid className={classes.tradingDataContainer}>
          <TradingData />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
