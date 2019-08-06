import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {main} from "../../config/main";
import {range} from 'lodash';

class Divider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const equals = (count) => range(count).reduce((s, v) => (`${s}=`), "");

    return (
      <div className="code-font divider" style={{'padding': '1rem 0 1rem 0'}} ref={div => this.ref = div}>
        <div className="equals first">{`//${equals(100)}`} </div>
        <div className="second primary-font-color">&nbsp;{this.props.label}&nbsp;</div>
        <div className="equals third">{` ${equals(100)}`}</div>
      </div>
    )
  }
}

Divider.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Divider;

