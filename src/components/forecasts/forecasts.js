import React, { Component } from "react";
import './style/forecasts.scss'

const ForecastsGraph = ({ data, ranges }) => {
  
    const styleRanges = ([firstRange, finalRange]) =>(
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
                    <div className="forecasts__graph" style={ styleRanges(ranges[index]) }>
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

    const ranges =
    // find the values of points on the chart
    data.map(ele => {
        let firstRange = null;
        let finalRange = null;
        for (let i = 0; i < ele.ranges.length; i++) {
            // if the value of the array is greater than the next one, 
            // then we add these values ​​and divide by 2, 
            // thereby we find the first point on the chart
            if (i === 0 && ele.ranges[i] > ele.ranges[i+1]) {
                let sum = ele.ranges[i] + ele.ranges[i+1]
                let currentRange = sum / 2

                // find the remainder to add it to the final value
                let remainder = ele.ranges[i] - currentRange

                finalRange += remainder
                firstRange = (ele.ranges[i] + ele.ranges[i+1]) / 2
            }

            // find the end point by summing all the elements of the array
            finalRange += ele.ranges[i]
        }

        firstRange = firstRange === null ? ele.ranges[0] + ele.ranges[1] : firstRange

        return [ firstRange, finalRange ]
    })

    return (
        <div className="forecasts">
          <h2 className="forecasts__content-title">FORECASTS</h2>
            <ForecastsGraph data={ data } ranges={ ranges }/>
        </div>
    )
  }

}

