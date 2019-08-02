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
      <div>
        <header>
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
              <Link prefetch href="/">
              <a className="navbar-item">
                <img src="/static/logo.png"/>
              </a>
              </Link>
              <a id="burger" onClick={(e) => this.toggleStyles(e)}
                 role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                 data-target="navbarmenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>


            <div id="navbarmenu" className="navbar-menu">
              <div className="navbar-start">
                {routing.routes.map(route => (
                  <Link prefetch href={route.path}>
                    <a className="navbar-item">{route.label}</a>
                  </Link>
                ))}
              </div>
            {/*<div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
                  </div>
                </div>
              </div>*/}
            </div>

          </nav>
        </header>


        {this.props.children}


        <footer className="footer">
          <div className="content has-text-centered">
            <span>I'm the footer</span>
          </div>
        </footer>
      </div>
    )
  }
}


export default Layout;