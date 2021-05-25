import {makeStyles} from '@material-ui/core/styles';
import {navWidth, navHeight} from '../shared/dimension';

export default  makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuBtn: {
    marginRight: 32,
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bolder'
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
    backgroundColor: 'black',
    [theme.breakpoints.up("sm")]:{
      width: `calc(100% - ${navWidth}px)`,
      height: navHeight
    }
  }
}));