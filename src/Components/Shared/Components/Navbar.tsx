import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DarkModeToggle from './DarkModeToggle';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: 'flex',
    // background: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBar: {
    background: theme.palette.background.paper,
    top: '0',
    // boxShadow: 'none',
    height: '90px',
    borderBottom: '0px solid',
    borderBottomColor: theme.palette.divider,
    // width: '100vw',
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
    // background: 'blue',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.text.primary,
    // background: 'green',
  },
  appName: {
    fontSize: theme.spacing(4.8),
    fontFamily: 'Montserrat',
    fontWeight: 900,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  drawer: {
    width: 250,
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
        // [classes.appBarHomePage]: homePage,
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
          <Typography variant="h6" className={classes.appName}>{appName}</Typography>
        </Grid>
        <Grid className={classes.navLinks}>
          <Typography>NAVKLINKS</Typography>
          <DarkModeToggle />
        </Grid>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
