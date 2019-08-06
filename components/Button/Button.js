import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="styled-button">
        {this.props.label}
      </div>
    )
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;

