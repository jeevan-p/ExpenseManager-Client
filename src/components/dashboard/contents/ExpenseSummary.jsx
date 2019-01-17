import React, { Component } from 'react';
import './ExpenseSummary.css';

class ExpenseSummary extends Component {
  render() {
    return (
      <div>
        <div className="expense-section">
            <div className="expense-child right-pad">
                <div>You get back</div>
                <div><span className="number-positive">15,000</span></div>
            </div>
            <div className="expense-child right-pad">
                <div><span className="number-positive">+20,000</span> from</div>
                <div><span className="number-positive">5</span> friends</div>
            </div>
            <div className="expense-child">
                <div><span className="number-negative">-5,000</span> to</div>
                <div><span className="number-negative">2</span> friends</div>
            </div>
        </div>
      </div>
    );
  }
}

export default ExpenseSummary;