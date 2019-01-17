import React, { Component } from 'react';
import './Dashboard.css';
import HeaderBar from './dashboard/HeaderBar.jsx';
import DashboardContents from './dashboard/DashboardContents.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="main-div-desktop">
          <HeaderBar />
          <DashboardContents />
        </div>
      </div>
    );
  }
}

export default Dashboard;