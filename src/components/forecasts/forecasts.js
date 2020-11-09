import React from "react";
import Graph from '../graph/graph';
import './style/forecasts.scss'

const Forecasts = () => {
  return (
    <div className="forecasts">
      <h2 className="forecasts__content-title">FORECASTS</h2>
      <div className="forecasts__container">
        <Graph />
      </div>
    </div>
  )
}

export default Forecasts
