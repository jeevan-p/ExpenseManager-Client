import React, { Component } from 'react';
import TopBar from './header/TopBar.jsx';
import UserBar from './header/UserBar.jsx';
import './HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div>
        <div className="header-bar-desktop">
          <TopBar />
          <UserBar />
        </div>
      </div>
    );
  }
}

export default HeaderBar;