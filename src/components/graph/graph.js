import React from "react";
import ranges from '../../utils/ranges'
import './style/graph.scss';

const Graph = ({ data }) => {

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
      <div className="graph">
        {
          data.map((ele, index) => {
            return (
              <React.Fragment key={index}>
                <h3 className="graph__content-title">{ ele.title }</h3>
                <div className="graph__box" style={ styleRanges(rangesData[index]) }>
                  <div className="graph__line" style={{width: `${ele.forecast * 2}%`}}></div>
                  <div className="graph__icon" style={{width: `${ele.forecast * 2}%`}}></div>
                </div>
                <div className="graph__container-value">
                  <p className="graph__paragraph">$ { ele.minValue }</p>
                  <p className="graph__paragraph">$ { ele.maxValue }</p>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }

  export default Graph