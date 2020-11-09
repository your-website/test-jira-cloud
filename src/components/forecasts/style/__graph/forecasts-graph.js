import React from "react";
import ranges from '../../../../utils/ranges'

const ForecastsGraph = ({ data }) => {

  const rangesData = ranges(data)

  const styleRanges = ([firstRange, finalRange]) => (
    {
      background: `linear-gradient(
        90deg,
        rgba(11, 32, 53, 1) 0%,
        rgba(11, 32, 53, 1) ${firstRange}%,
        rgba(40, 107, 250, 1) ${firstRange}%,
        rgba(40, 107, 250, 1) ${finalRange}%,
        rgba(119, 195, 247, 1) ${finalRange}%,
        rgba(119, 195, 247, 1) 100%
      )`
    }
  )
  
  return (
    <div>
      {
        data.map((ele, index) => {
          return (
            <div key={index} className="forecasts__container">
              <h3 className="forecasts__content-subtitle">{ ele.title }</h3>
              <div className="forecasts__graph" style={ styleRanges(rangesData[index]) }>
                <div className="forecasts__line" style={{width: `${ele.forecast * 2}%`}}></div>
                <div className="forecasts__icon" style={{width: `${ele.forecast * 2}%`}}></div>
              </div>
              <div className="forecasts__container-value">
                <p className="forecasts__paragraph">$ { ele.minValue }</p>
                <p className="forecasts__paragraph">$ { ele.maxValue }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
  }

  export default ForecastsGraph