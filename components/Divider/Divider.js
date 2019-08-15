import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Divider extends Component {
  constructor(props) {
    super(props);
  }

  static calWidth(cars) {
    const val = cars * 0.7; // this is rough calc
    return {width: `${val}rem`};
  }

  render() {
    return (
      <div className="code-font divider" ref={div => this.ref = div}>
        <span className="slash-slash">//</span>
        <div className="dashed"/>
        <div className="divider-title primary-font-color" style={{...Divider.calWidth(this.props.label.length)}}>
          {this.props.label}
        </div>
      </div>
    )
  }
}

Divider.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Divider;

