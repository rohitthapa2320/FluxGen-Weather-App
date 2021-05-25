import {makeStyles} from '@material-ui/core/styles';
import {navWidth, navHeight} from '../shared/dimension';


export default makeStyles((theme) => ({
  paper:{
    display: 'flex',
    alignItems: 'center',
    height: 60,
    width: 600,
    margin: 'auto',
    marginTop: '20vh',
    borderRadius: 12,
    [theme.breakpoints.down("sm")]:{
        marginTop: '5vh',
        height: 50,
        width: 280
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconBtn: {
    margin: 10,
  },
  getText:{
    padding: 4
  },
  divider:{
    height: 36
  },
  searchBtn:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    margin: 'auto',
    marginTop: 40,
    width: 180
  },
  main:{
      paddingTop: navHeight
  },
  [theme.breakpoints.up("sm")]:{
    main:{
    paddingLeft: navWidth,
    paddingTop: navHeight
  }
  }
}));