import React from 'react';
import {Paper, InputBase, Typography,Button} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import WbSunnyIcon from '@material-ui/icons/WbSunny'

import useStyles from './styles';

const Home = () => {
  const classes= useStyles();
  return (
    <div className={classes.main}>
          <Paper component="form" className={classes.paper} elevation={2}>
            <SearchIcon className={classes.iconBtn}/>
            <InputBase className={classes.input}
            placeholder="Enter City..."
            inputProps={{ 'aria-label': 'search google maps' }}/>
          </Paper>
  
          <Button className={classes.searchBtn} variant="contained" color="secondary">
            <WbSunnyIcon className={classes.icnBtn}/>
            <Typography className={classes.getText}>Get Weather</Typography>
          </Button>
        
    </div>
  )
}

export default Home;
