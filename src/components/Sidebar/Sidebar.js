import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {AppBar,CssBaseline,Toolbar, Typography,Drawer, IconButton,Divider,
  List, ListItem, ListItemText, Hidden} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';


const Sidebar = () => {

  const classes= useStyles();
  const [open,setOpen] = useState(false);

  const navItems= (
    <>
    <Toolbar />
    <Divider />
    <List disablePadding className={classes.drawer}>
          <NavLink className={classes.navLink} to="/home">
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink className={classes.navLink}  to="/services">
            <ListItem button>
                <ListItemText primary="Services" />
            </ListItem>
          </NavLink>       
          <NavLink className={classes.navLink}  to="/about">
            <ListItem button>
                <ListItemText primary="About" />
            </ListItem>
          </NavLink>
          <NavLink className={classes.navLink}  to="/contact">
            <ListItem button>
                <ListItemText primary="Contact" />
            </ListItem>
          </NavLink>
    </List>
    </>

  );

  return(
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp implementation="css">
        <Drawer open={open}  onClose={() => setOpen(false)}>
         {navItems}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer open={open} variant="permanent" onClose={() => setOpen(false)}>
         {navItems}
        </Drawer>
      </Hidden>
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuBtn} color="inherit" aria-label="menu"
          onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            FluxGen Weather-App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default Sidebar;