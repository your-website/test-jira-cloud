import React, { Component } from "react";
import Graph from '../graph/graph';

import './style/forecasts.scss'

export default class Forecasts extends Component {

  state = {
    data: [
      {
        title: 'Current Month',
        ranges: [10, 20, 40],
        forecast: 10,
        minValue: '1.6k',
        maxValue: '2.4k',
      },
      {
        title: 'Current Quarter',
        ranges: [20, 10, 40],
        forecast: 30,
        minValue: '1.6k',
        maxValue: '2.4k',
      }
    ]
  };

  render() {
    const { data } = this.state;

    return (
        <div className="forecasts">
          <h2 className="forecasts__content-title">FORECASTS</h2>
          <div className="forecasts__container">
            <Graph data={ data } />
          </div>
        </div>
    )
  }
}

