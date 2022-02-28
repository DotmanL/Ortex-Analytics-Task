import React from 'react';
import { withStyles, makeStyles, useTheme } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
// import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {},
  },
  linkTitle: {
    color: theme.palette.text.primary,
    width: 'auto',
    height: 'auto',
    padding: theme.spacing(0.5, 1),
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(1),
    textDecoration: 'underline',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.4),
      padding: theme.spacing(0.5, 0.8),
    },
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    margin: '0px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))(MuiDialogContent);

export interface CustomizedDialogsProps {
  component: React.ReactNode;
  linkTitle: string;
}

export const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({ component, linkTitle }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        className={classes.linkTitle}
        variant="h4"
        onClick={handleClickOpen}
      >
        {linkTitle}
      </Typography>
      {desktop && (
        <Dialog
          // fullScreen
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}

        >
          <DialogContent sx={{ overflow: 'hidden' }}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Grid>{component}</Grid>
          </DialogContent>
        </Dialog>
      )}
      {tablet && (
        <Dialog
          // fullScreen
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}

        >
          <DialogContent sx={{ overflow: 'hidden' }}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Grid>{component}</Grid>
          </DialogContent>
        </Dialog>
      )}
      {mobile && (
        <Dialog
          // fullScreen
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogContent sx={{ overflow: 'hidden' }}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Grid>{component}</Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
