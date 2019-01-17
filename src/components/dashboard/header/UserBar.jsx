import React, { Component } from 'react';
import './UserBar.css';

class UserBar extends Component {
  render() {
    return (
        <div className="user-section">
            <div className="user-avatar">
            </div>
            <div className="user-name">
                Dummy User Name
            </div>
            <div className="user-contact">
                dummymail@mail.com | 9876543210
            </div>
        </div>
    );
  }
}

export default UserBar;