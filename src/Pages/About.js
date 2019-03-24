import React, { Component } from 'react';
import picture from '../Images/Groomsmen short.png'

class About extends Component {
    render() {
      return (
        <div>
          <div>
            Read all about me!
            <img src={picture} alt="Stuart Foley"></img>
          </div>
        </div>
      );
    }
  }
  
  export default About;
  