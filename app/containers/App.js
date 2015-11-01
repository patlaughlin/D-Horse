import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DayInput from './../components/DayInput';
import DayHead from './../components/DayHead';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { dispatch } = this.props;
    let dayInputs = [];
    let dayHeads  = [];

    for (var i = 0; i < 7; i++) {
      dayInputs.push(
        <DayInput key={i}/>
      );
      dayHeads.push(
        <DayHead key={i}/>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped">
              <thead>
              <tr>
                {dayHeads}
              </tr>
              </thead>
              <tbody>
              <tr>
                {dayInputs}
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {};
}

export default connect(select)(App);

