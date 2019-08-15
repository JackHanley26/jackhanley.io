import React, {Component} from 'react';
import PropTypes from 'prop-types';

// key to class name map
const sizing= {
  "sm": "styled-button-small",
  "md": "styled-button-medium",
  "lg": "styled-button-large"
};

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`styled-button ${this.props.size in sizing ? sizing[this.props.size] : '' }`} onClick={this.props.onClick}>
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

