/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // background: 'red',
    flexDirection: 'column',
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  timestamp: {
    fontSize: theme.spacing(2.4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(2),
    },
  },
  tableContainer: {
    // background: theme.palette.background.default,
    // background: 'yellow',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.6),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.4),
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.spacing(2.0),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
    },
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const socket = new WebSocket('wss://stream.tradingeconomics.com/?client=guest:guest');

const apiCall = {
  topic: 'subscribe',
  to: 'EURUSD:CUR',
};

// interface TradingDatas {
//   dt?: number;
// price?: number;
// topic: string;
// }

// function createData(
//   ticker: string,
//   price: number,
//   date: number
// ) {
//   return ({
//     ticker, price, date,
//   });
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

// ];
const TradingData: React.FC = () => {
  const [tradeData, setTradeData] = React.useState([] as any);

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    socket.onopen = () => {
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
  // const theme = useTheme();
  const utcDate = tradeData.dt;
  const localDate = new Date(utcDate).toTimeString();

  console.log(localDate);

  return (
    <Grid className={classes.root}>
      <Typography className={classes.timestamp} variant="h6">
        Timestamp:
        {' '}
        {localDate}
      </Typography>
      <Grid>

        <TableContainer className={classes.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Majors</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Percentage Change</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow

                // eslint-disable-next-line react/jsx-props-no-multi-spaces
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {tradeData.i}
                </StyledTableCell>
                <StyledTableCell sx={{ border: '1px solid black' }} align="center">{tradeData.price}</StyledTableCell>
                <StyledTableCell align="center">
                  {tradeData.pch}
                  {' '}
                  %
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TradingData;
