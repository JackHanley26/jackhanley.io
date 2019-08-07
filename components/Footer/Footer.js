import React, {Component} from 'react';
import app from "../../package";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer has-background-black">
        <div className="content has-text-centered">
          <p>
            Build and designed by&nbsp;
            <a className="primary-font-color" href="http://jackhanley.io" target="_blank">{app.author}</a> using&nbsp;
            <a className="dull-font-color" href="https://reactjs.org" target="_blank">ReactJS</a>,&nbsp;
            <a className="dull-font-color" href="https://nextjs.org" target="_blank">NextJS</a> and&nbsp;
            <a className="dull-font-color" href="https://bulma.io" target="_blank">Bulma</a>.
          </p>
        </div>

        <div className="container is-centered">
          {/*<FontAwesomeIcon icon={faCode} style={{margin: 'auto'}}/>*/}
        </div>

      </footer>
    )
  }
}

Footer.propTypes = {};

export default Footer;

