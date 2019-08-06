import React, {Component, Fragment} from 'react';
import Layout from "../components/Layout/Layout";
import {home, email} from "../config/main";
import {TimelineLite} from "gsap";
import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";

class Index extends Component {

  constructor(props) {
    super(props);

    this.greeting = null;
    this.title = null;
    this.subtitle = null;
    this.profile = null;
    this.button = null;
    this.myTween = new TimelineLite({paused: true});
  }

  componentDidMount() {
    this.myTween
      .from(this.greeting, 0.7, {y: 30, opacity: 0})
      .from(this.title, 0.3, {y: 30, opacity: 0})
      .from(this.subtitle, 0.3, {y: 30, opacity: 0})
      .from(this.summary, 0.3, {y: 30, opacity: 0})
      .from(this.button, 0.3, {y: 30, opacity: 0})
      .play();
  }

  openMail() {
    window.location.href = `mailto:${email}`;
  }

  render() {
    return (
      <Layout>

        <section id="landing-section" className="section fixed-nav-padding first-section">
          <div className="container format-text">

            <h1 className="primary-font-color code-font" ref={r => this.greeting = r}>{home.greeting}</h1>

            <h1 className="title-text secondary-font-color title-text" ref={r => this.title = r}>{home.name}</h1>

            <h1 className="title-text dull-font-color" ref={r => this.subtitle = r}>{home.title}</h1>


            <p className="default-text dull-font-color" ref={r => this.summary = r}>{home.summary}</p>


            <div ref={r => this.button = r} style={{'margin-top': '3rem'}}>
              <Button label="Say hello :)" onClick={this.openMail}/>
            </div>

          </div>
        </section>


        <section id="about-me" className="section">
          <div className="container">
            <Divider label={'About me'}/>

            <div className="columns">
              <div className="column">
                <p className="format-text dull-font-color">{home.aboutMe}</p>
              </div>
              <div className="column is-centered">
                <figure className="image is-128x128 is-centered" ref={r => this.profile = r}>
                  {/*<img className="is-rounded" src="../static/profile.png"/>*/}
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
              </div>
            </div>
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
