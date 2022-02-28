/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {},
  },

}));

const socket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

const apiCall = {
  topic: 'subscribe',
  to: 'EURUSD:CUR',
};

// const dummy = {
//   s: 'EURUSD:CUR',
//   i: 'EURUSD',
//   pch: -0.72,
//   nch: -0.00814,
//   bid: 1.11896,
//   ask: 1.11896,
//   price: 1.11896,
//   dt: 1646009242271,
//   state: 'open',
//   type: 'currency',
//   dhigh: 1.11916,
//   dlow: 1.11489,
//   o: 1.11489,
//   prev: 1.1271,
//   topic: 'EURUSD',
// };

// interface TradingDatas {
//   dt?: number;
// price?: number;
// topic: string;
// }

const TradingData: React.FC = () => {
  const [tradeData, setTradeData] = React.useState([] as any);

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    socket.onopen = (event) => {
      socket.send(JSON.stringify(apiCall));
      console.log(apiCall);
    };
    socket.onmessage = async (event) => {
      const json = await JSON.parse(event.data);
      console.log(json);
      setTradeData(json);

      return () => socket.close();
    };
  });

  const classes = useStyles();
  const utcDate = tradeData.dt;
  const localDate = new Date(utcDate).toTimeString();

  console.log(localDate);

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Typography>EUR/USD</Typography>
        <Typography>
          TimeStamp
          {' '}
          {localDate === 'Invalid Date' ? '' : localDate}
        </Typography>
        <Typography>
          Price
          {' '}
          {tradeData.price}
          {' '}
          {tradeData.pch}
          %
        </Typography>
      </Grid>

      <Grid />
    </Grid>
  );
};

export default TradingData;
