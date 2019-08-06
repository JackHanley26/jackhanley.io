import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="styled-button" onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;

