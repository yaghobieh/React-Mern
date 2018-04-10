import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import FontAwesome from 'react-fontawesome';

import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>

    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating btn-large red">
        <FontAwesome className='super-crazy-colors' name="plus"></FontAwesome>
      </Link>
    </div>
  </div>
)

export default App;
