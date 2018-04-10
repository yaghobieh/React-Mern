import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Meetups</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/"><FontAwesome className='super-crazy-colors' name="user"/>  MeetUps</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/meetups/add"> <FontAwesome className='super-crazy-colors' name="plus"/>  Add meetup</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
