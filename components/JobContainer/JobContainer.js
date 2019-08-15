import React, {Component} from 'react';
import PropTypes from 'prop-types';


class JobContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="jobs-tabs">
          <li className="">IBM</li>
          <li>IBM</li>
          <li>IBM</li>
          <li>IBM</li>
        </ul>
      </div>
    )
  }
}

JobContainer.propTypes = {};

export default JobContainer;

