import React from 'react';
import '../assets/styles/components/Header.scss';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../assets/styles/Theme';
import logo from '../assets/static/adidas-logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <div className='header-container'>
            <figure className='logo'>
              <img src={logo} alt='logoIcon' />
            </figure>
            <form className='search'>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </form>
            <div className='profile'>
              <ol>
                <li>
                  <a className='link' href='#portafolio'>HELP</a>
                </li>
                <li>
                  <a className='link' href='#eventos'>ORDER TRACKER AND RETURNS</a>
                </li>
                <li>
                  <a className='link' href='#contacto'>JOIN CREATORS CLUB</a>
                </li>
                <li>
                  <a className='link' href='#contacto'>CREATORS CLUB</a>
                </li>
                <li>
                  <a className='link' href='#contacto'>LOGIN</a>
                </li>
              </ol>
            </div>
            <div className='info'>
              <ol>
                <li>
                  <a className='link' href='#portafolio'>MEN</a>
                </li>
                <li>
                  <a className='link' href='#eventos'>WOMEN</a>
                </li>
                <li>
                  <a className='link' href='#contacto'>KIDS</a>
                </li>
              </ol>
            </div>
          </div>
        </header>
      </ThemeProvider>
    </>
  );
};

export default Header;
