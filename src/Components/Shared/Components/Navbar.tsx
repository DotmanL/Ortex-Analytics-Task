import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { makeStyles, useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DarkModeToggle from './DarkModeToggle';
import ortex from '../assets/ortexmainlog.png';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      // justifyContent: 'center',
    },
  },
  appBar: {
    background: theme.palette.background.paper,
    top: '0',
    // boxShadow: 'none',
    height: '90px',
    borderBottom: '0px solid',
    borderBottomColor: theme.palette.divider,
    padding: theme.spacing(0, 0),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  new: {
    background: theme.palette.background.paper,
    top: '0',
    height: '90px',
    padding: theme.spacing(0, 0),
    justifyContent: 'center',
    boxShadow: '0 5px 5px -2px rgba(0, 0, 0, 0.2)',
    marginTop: theme.spacing(-0.1),
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  iconButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  iconButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {

    },
  },
  navLinksContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.text.primary,
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  appName: {
    fontSize: theme.spacing(3.6),
    fontFamily: 'Montserrat Alternates',
    fontWeight: 900,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.8),
    },
  },
  appLogo: {
    display: 'flex',
    width: '80px',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      height: '40px',
    },
  },
  close: {
    marginLeft: theme.spacing(1),
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100vw',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 2),
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: 'auto',
    height: 'auto',
    borderRadius: '15px',
    padding: theme.spacing(0.3, 2),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      color: 'white',
    },
  },
}));

interface NavBarProps {
  appName: string;
}

export const NavBar: React.FC<NavBarProps> = ({ appName }) => {
  const classes = useStyles();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line operator-linebreak
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // eslint-disable-next-line no-shadow
      const scrolledDown = bodyScrollTop > 120;
      setScrolledDownEnough(scrolledDown);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDownEnough]);

  return (
    <AppBar
      position="fixed"
      className={classnames({
        [classes.new]: scrolledDownEnough,
        [classes.appBar]: !scrolledDownEnough,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Grid className={classes.iconButtonContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid className={classes.logoNameContainer}>
            <Grid className={classes.appLogo}>
              <img src={ortex} alt="ortex logo" />
            </Grid>
            <Typography variant="h6" className={classes.appName}>{appName}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.navLinksContainer}>

          {desktop && (
            <Grid className={classes.navLinks}>
              <ListItem button>
                <ListItemText primary="Data" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Ideas" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Features" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Pricing" />
              </ListItem>
            </Grid>
          )}
          <DarkModeToggle />
        </Grid>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Grid className={classes.drawer}>
            <Grid container className={classes.close}>
              <CloseIcon onClick={() => setIsDrawerOpen(false)} />
            </Grid>
            <List>
              <ListItem button>
                <ListItemText primary="Data" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Ideas" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Features" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Pricing" />
              </ListItem>
            </List>
          </Grid>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
