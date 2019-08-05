import React, {Component} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import '../../styles/styles.sass'
import routing from '../../config/routing';


class Layout extends Component {


  constructor(props) {
    super(props);
    this.state = {
      burgerActive: true,
      menuActive: true,
    };
  }

  toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  };

  render() {
    return (
      <div className="dark-background">
        <head>
          <title>Jack Hanley IO</title>
        </head>
        <header>
          <nav className="navbar is-fixed-top dark-background" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
              <Link prefetch href="/">
                <a className="navbar-item">
                  <img className="primary-font-color" src="/static/logo_2.png"/>
                </a>
              </Link>
              <a id="burger" onClick={(e) => this.toggleStyles(e)}
                 role="button" className="navbar-burger burger primary-font-color" aria-label="menu"
                 aria-expanded="false"
                 data-target="navbarmenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>


            <div id="navbarmenu" className="navbar-menu dark-background">
              <div className="navbar-start">
                {routing.routes.map(route => (
                  <Link prefetch href={route.path}>
                    <a className="navbar-item primary-font-color">{route.label}</a>
                  </Link>
                ))}
              </div>
            </div>

          </nav>
        </header>


        {this.props.children}


        {/*        <footer className="footer">
          <div className="content has-text-centered">
            <span>I'm the footer</span>
          </div>
        </footer>*/}
      </div>
    )
  }
}


export default Layout;
