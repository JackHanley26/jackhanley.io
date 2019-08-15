import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";
import * as _ from 'lodash';

const listLimit = 6;

class TechStackCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLimit,
      showViewMore: true,
    }
  }

  render() {
    return (
      <Fragment>
        <FontAwesomeIcon icon={this.props.icon}/>
        <span className="tech-title">{this.props.title}</span>
        <div className="tech-list dull-font-color">
          <ul className="">
            {this.props.items.map((item, index) => (
              <li className={`${this.props.fadeItems && index === this.props.items.length - 1 && 'fade-list-end'}`}>
                <span className="code-font primary-font-color">#</span>
                {item.link && item.link.length > 0 ?
                  <a className="tech-item highlight-on-hover code-font" href={item.link} target="_blank">
                    {item.label}
                  </a>
                  :
                  <span className="tech-item code-font">{item.label}</span>
                }
              </li>
            ))}
            {/*            {this.props.items.length > listLimit && this.state.showViewMore && (
              <li>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="primary-font-color"/>
                <a className="tech-item code-font" onClick={() => this.toggleViewMore(false)}>{'More'}</a>
              </li>
            )}
            {!this.state.showViewMore && (
              <li>
                <FontAwesomeIcon icon={faAngleDoubleUp} className="primary-font-color"/>
                <a className="tech-item code-font" onClick={() => this.toggleViewMore(true)}>{'Less'}</a>
              </li>
            )}*/}
          </ul>
        </div>
      </Fragment>
    )
  }
}

TechStackCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  fadeItems: PropTypes.bool
};

export default TechStackCategory;

