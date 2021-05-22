import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';
import About from './About';
import Contact from './Contact';
import Services from './Services';

const Main = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/home" component={() => <Home />}/>
        <Route exact path="/services" component={() => <Services />}/>
        <Route exact path="/contact" component={() => <Contact />}/>
        <Route exact path="/about" component={() => <About />}/>
        <Redirect to="/home" />
      </Switch>
      
    </>
  )
}

export default Main;
