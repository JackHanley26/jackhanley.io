import React, {Component} from 'react';
import Layout from "../components/Layout/Layout";
import {home, email, techStack} from "../config/main";
import {TimelineLite} from "gsap";
import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faTools, faBook, faTerminal, faCaretRight} from "@fortawesome/free-solid-svg-icons";

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
      .delay(0.5)
      .from(this.greeting, 0.7, {y: 30, opacity: 0})
      .from(this.title, 0.3, {y: 30, opacity: 0})
      .from(this.subtitle, 0.3, {y: 30, opacity: 0})
      .from(this.summary, 0.3, {y: 30, opacity: 0})
      .from(this.button, 0.3, {y: 30, opacity: 0})
      .play();
  }

  static openMail() {
    window.location.href = `mailto:${email}`;
  }

  static openLinkInTab(url){
    window.open(url,'_blank');
  }

  render() {
    return (
      <Layout>

        <section id="landing-section" className="section fixed-nav-padding first-section">
          <div className="container format-text">

            <h1 className="primary-font-color code-font" ref={r => this.greeting = r}>{home.greeting}</h1>

            <h1 className="title-text bright-font-color title-text" ref={r => this.title = r}>{home.name}</h1>

            <h1 className="title-text dull-font-color" ref={r => this.subtitle = r}>{home.title}</h1>

            <p className="default-text dull-font-color" ref={r => this.summary = r}>{home.summary}</p>

            <div className="button-wrapper" ref={r => this.button = r}>
              <Button label="Get in touch." onClick={Index.openMail}/>
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
                <figure className="image is-128x128 is-horizontal-center" ref={r => this.profile = r}>
                  {/*<img className="is-rounded" src="../static/profile.png"/>*/}
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"
                       alt="Profile Picture"/>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="section">
          <div className="container">
            <Divider label={'Tech stack'}/>

            <div className="columns">

              <div className="column">
                <div className="bright-font-color">
                  <FontAwesomeIcon icon={faCode}/>
                  <span className="tech-title">Languages</span>
                  <div className="tech-list dull-font-color">
                    <ul>
                      {techStack.languages.map(item => (
                        <li>
                          <span className="code-font primary-font-color">#</span>
                          <a className="tech-item code-font" href={item.link} target="_blank">{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="bright-font-color">
                  <FontAwesomeIcon icon={faTools}/>
                  <span className="tech-title">Frameworks</span>
                  <div className="tech-list dull-font-color">
                    <ul>
                      {techStack.frameworks.map(item => (
                        <li>
                          <span className="code-font primary-font-color">#</span>
                          <a className="tech-item code-font" href={item.link} target="_blank">{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="bright-font-color">
                  <FontAwesomeIcon icon={faBook}/>
                  <span className="tech-title">Libraries</span>
                  <div className="tech-list dull-font-color">
                    <ul>
                      {techStack.libraries.map(item => (
                        <li>
                          <span className="code-font primary-font-color">#</span>
                          <a className="tech-item code-font" href={item.link} target="_blank">{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="bright-font-color">
                  <FontAwesomeIcon icon={faTerminal}/>
                  <span className="tech-title">Other</span>
                  <div className="tech-list dull-font-color">
                    <ul>
                      {techStack.other.map(item => (
                        <li>
                          <span className="code-font primary-font-color">#</span>
                          <a className="tech-item code-font" href={item.link} target="_blank">{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </Layout>
    )
  }
}

export default Index;
