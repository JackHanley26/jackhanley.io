import React, {Component, Fragment} from 'react';
import Layout from "../components/Layout/Layout";
import {home} from "../config/main";
import {TweenLite, TimelineLite} from "gsap";

class Index extends Component {

  constructor(props) {
    super(props);

    this.greeting = null;
    this.title = null;
    this.subtitle = null;
    this.profile = null;
    this.summary = null;
    this.myTween = new TimelineLite({paused: true});
  }

  componentDidMount() {
    this.myTween
      .from(this.greeting, 0.5, {y: 30, opacity: 0})
      .from(this.title, 0.3, {y: 30, opacity: 0})
      .from(this.subtitle, 0.3, {y: 30, opacity: 0})
      .from(this.profile, 0.3, {y: 30, opacity: 0})
      .play();
  }

  render() {
    return (
      <Layout>

        {/*<section className="section section-padding">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Components</a></li>
              <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
            </ul>
          </nav>
        </section>*/}


        <section className="section fixed-nav-padding">
          <div className="container format-text">
            <h5 className="primary-font-color code-font" ref={r => this.greeting = r}>{home.greeting}</h5>
            <h1 className="title secondary-font-color" ref={r => this.title = r}>{home.name}</h1>
            <h1 className="title dull-font-color" ref={r => this.subtitle = r}>{home.title}</h1>

            <figure className="image is-128x128 is-centered" ref={r => this.profile = r}>
              {/*<img className="is-rounded" src="../static/profile.png"/>*/}
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>

          </div>
        </section>

        {/*        <section className="section hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Primary title
              </h1>
              <h2 className="subtitle">
                Primary subtitle
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="">

          </div>
        </section>*/}

      </Layout>
    )
  }
}

export default Index;
