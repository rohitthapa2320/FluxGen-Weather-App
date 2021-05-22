import React from 'react';
import {makeStyles} from '@material-ui/core';

import {navWidth, navHeight} from './shared/dimension';

const useStyles = makeStyles((theme) => ({
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


const Services = () => {
  const classes= useStyles();
  return (
    <div className={classes.main}>
      <h1>Services</h1>
    </div>
  )
}

export default Services;
