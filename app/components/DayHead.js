import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class DayHead extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let date = moment().format('D MMM YY');
    console.log(date);
  }

  render() {
    return (
      <td>
        <td></td>
      </td>
    )
  }
}


