import React, { Component, PropTypes } from 'react';

export default class DayInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>
        <input type="text" className="weight form-control" placeholder="Weight" />
        <input type="text" className="calories form-control" placeholder="Calories" />
      </td>
    )
  }
}


