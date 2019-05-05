import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Work from '../Pages/Work.js';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

class Main extends Component {
    render() {
      return (
        <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/work' component={Work}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
      );
    }
  }
  
  export default Main;
  