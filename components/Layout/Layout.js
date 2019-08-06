import React, {Component} from 'react';
import Link from 'next/link'
import '../../styles/styles.sass'
import routing from '../../config/routing';
import {TimelineLite} from "gsap";
import {main} from "../../config/main";


class Layout extends Component {


  constructor(props) {
    super(props);
    this.state = {
      burgerActive: true,
      menuActive: true,
    };
    this.home = null;
    this.portfolio = null;
    this.tutorials = null;
    this.contact = null;
    this.navOptions = null;
    this.myTween = new TimelineLite({paused: true})
  }

  componentDidMount() {
    this.myTween
    // .from(this.home, 0.5, {y: -30, opacity: 0})
    // .from(this.portfolio, 0., {y: -30, opacity: 0})
    // .from(this.tutorials, 0.5, {y: -30, opacity: 0})
    // .from(this.contact, 0.5, {y: -30, opacity: 0})
      .from(this.navOptions, 0.5, {y: 30, opacity: 0})
      .play();
  }

  toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  };

  render() {
    return (
      <div className="dark-background">
        <head>
          <title>{main.title}</title>
        </head>
        <header>
          <nav className="navbar dark-background" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
              <Link prefetch href="/">
                <a className="navbar-item">
                  <img className="primary-font-color" src="/static/logo.png"/>
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
              <div className="navbar-start" ref={r => this.navOptions = r}>
                {routing.routes.map(route => (
                  <Link prefetch href={route.path} ref={r => this[route.name] = r}>
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
