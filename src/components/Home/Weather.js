import React from 'react';
import { Paper, Typography, Container, Grid} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    height: 500,
    width: 600,
    margin: 'auto',
    marginTop: '10vh',
    marginBottom: 200,
    borderRadius: 12,
    [theme.breakpoints.down("sm")]:{
        marginTop: '5vh',
        height: 420,
        width: 320
    }
  }, 
  text:{
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 32,
    [theme.breakpoints.down('sm')]:{
      fontSize: 24
    }
  },
  icon: {
        color: 'darkred',
        marginRight: 15
    },
}));

const Weather = ({data}) => {
  const classes= useStyles();
  const getCloudsData = (value) => {
        if(value === 0){
            return 'Clear';
        }else if(value > 1 && value < 100){
            return 'Partially Cloudy';
        }else{
            return 'Cloudy';
        }
    }
  return (
    
      data ? (
        <Container>
        <Grid item>
          <Paper className={classes.root}>
            <Typography className={classes.text}><LocationOnIcon className={classes.icon}/>Location:{data.name}</Typography>
            {/* <Typography className={classes.text}><SettingsBrightnessIcon className={classes.icon} />Temperature:{data.main.temp *0.1}°C</Typography>
            <Typography className={classes.text}><OpacityIcon className={classes.icon} />Humidity:  {data.main.humidity}% </Typography>
            <Typography className={classes.text}><Brightness5Icon className={classes.icon} />Sun Rise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Typography>
            <Typography className={classes.text}><Brightness6Icon className={classes.icon} />Sun Set: {new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Typography> 
            <Typography className={classes.text}><DehazeIcon className={classes.icon} />Condition: {data.weather[0].main} </Typography>
            <Typography className={classes.text}><CloudIcon className={classes.icon} />Clouds: {getCloudsData(data.clouds.all)}</Typography> */}
          </Paper>
      
        </Grid>
      </Container>
    
      ) : <h1 className={classes.root}>Enter Correct City</h1>
  )
}

export default Weather;
