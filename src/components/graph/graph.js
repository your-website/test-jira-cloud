import React, { Component } from 'react';
import { funcRanges } from '../../utils'
import { connect } from 'react-redux'
import { setRangesGraph } from '../../actions'

import './style/graph.scss'

class Graph extends Component {

  componentDidMount() {
    const { data } = this.props;
    const newRange = funcRanges(data);

    const newArray = data.map((ele, index) => {
      ele.newRanges = newRange[index];
      return ele
    });

    this.props.setRangesGraph(newArray)
  }

  render() {
    const { data } = this.props;

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
    );

    return (
      <div className="graph">
        {
          data.map((ele, index) => {
            return (
              <React.Fragment key={index}>
                <h3 className="graph__content-title">{ ele.title }</h3>
                <div className="graph__box" style={ styleRanges(ele.newRanges) }>
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
}

const mapStateToProps = ({ data }) => {
  return { data }
};

const mapDispatchToProps = {
  setRangesGraph
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph)
