import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TradingData } from '../Shared/Components/TradingData';
import financial from './assets/uanalyticsmain.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    color: theme.palette.text.primary,
    height: 'auto',
    padding: theme.spacing(1),
    width: 'auto',
  },
  introContainer: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
  },
  introText: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(3.6),
    width: '100%',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tradingDataContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    },
  },

}));

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {desktop && (
      <Grid container className={classes.root}>
        <Grid className={classes.introContainer}>
          <Typography variant="h3" className={classes.introText}>
            Make smarter trades with ORTEX&#39;s
            award-winning stock-data & ideas platform
          </Typography>
          <Grid className={classes.tradingDataContainer}>
            <TradingData />
          </Grid>
        </Grid>
        <Grid className={classes.imageContainer}>
          <img className={classes.image} src={financial} alt="art" />
        </Grid>
      </Grid>
      )}
    </>
  );
};

export default LandingPage;
