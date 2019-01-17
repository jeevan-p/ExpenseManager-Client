import React, { Component } from 'react';
import './DashboardContents.css';
import ExpenseSummary from './contents/ExpenseSummary.jsx';
import Frequent from './contents/Frequent.jsx';

class DashboardContents extends Component {
  render() {
    return (
      <div className="body-contents">
        <ExpenseSummary />
        <Frequent />
      </div>
    );
  }
}

export default DashboardContents;