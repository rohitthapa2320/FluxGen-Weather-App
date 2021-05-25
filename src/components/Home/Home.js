import React, {useState, useEffect} from 'react';
import {Paper, InputBase, Typography,Button, Divider} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import {getData} from '../../api/api';

import useStyles from './styles';

import Weather from './Weather';

const Home = () => {
  const classes= useStyles();
  const [city, setCity] = useState('');
  const [data,setData]= useState({});
  const [click,setClick] = useState(false);
  
  useEffect(()=>{

      const fetchData = async () => {
        await getData(city).then((response) => {
          setData(response.data);  
        }) 
      }

      fetchData();    

  },[click]);
  
  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick=() => {
    setClick(true);
  }

  return (
    <div className={classes.main}>
          <Paper component="form" className={classes.paper} elevation={2}>
            <SearchIcon className={classes.iconBtn}/>
            <Divider className={classes.divider} orientation='vertical' />
            <InputBase className={classes.input}
            onChange={handleChange}
            placeholder="Enter City..."
            inputProps={{ 'aria-label': 'search google maps' }}/>
          </Paper>
  
          <Button className={classes.searchBtn} variant="contained" color="secondary" onClick={handleClick}>
            <WbSunnyIcon className={classes.icnBtn}/>
            <Typography className={classes.getText}>Get Weather</Typography>
          </Button>

          {
            (city && click) && (<Weather data={data} />)
          }
        
    </div>
  )
}

export default Home;
