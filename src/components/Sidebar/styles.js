import {makeStyles} from '@material-ui/core';
import {navWidth, navHeight} from '../shared/dimension';

export default  makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
  },
  drawer:{
    width: navWidth
  },
  navLink:{
    textDecoration: 'none',
    color: 'black',
    fontSize: 24
  },
  appBar: {
    height: navHeight,
    [theme.breakpoints.up("sm")]:{
      width: `calc(100% - ${navWidth}px)`,
      height: navHeight
    }
  }
}));