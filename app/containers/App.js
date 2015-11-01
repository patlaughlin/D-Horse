import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

App.propTypes = {
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {};
}

export default connect(select)(App);

