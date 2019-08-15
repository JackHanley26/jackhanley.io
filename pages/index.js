import React, {Component} from 'react';
import Layout from "../components/Layout/Layout";
import {home, email, techStack} from "../config/main";
import {TimelineLite} from "gsap";
import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer/Footer";
import TechStackCategory from "../components/TechStackCategory/TechStackCategory";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faTools, faBook, faTerminal, faDatabase, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import * as _ from "lodash";
import JobContainer from "../components/JobContainer/JobContainer";

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      techStack: {
        listLimit: 6,
        viewMore: false
      }
    };

    this.greeting = React.createRef();
    this.title = React.createRef();
    this.subtitle = React.createRef();
    this.profile = React.createRef();
    this.button = React.createRef();
    this.landingTween = new TimelineLite({paused: true});

    this.languages = React.createRef();
    this.frameworks = React.createRef();
    this.libraries = React.createRef();
    this.others = React.createRef();
    this.techStackTween = new TimelineLite({paused: true});
  }

  componentDidMount() {
    this.landingTween
      .delay(0.5)
      .from(this.greeting, 0.7, {y: 30, opacity: 0})
      .from(this.title, 0.3, {y: 30, opacity: 0})
      .from(this.subtitle, 0.3, {y: 30, opacity: 0})
      .from(this.summary, 0.3, {y: 30, opacity: 0})
      .from(this.button, 0.3, {y: 30, opacity: 0})
      .play();
  }

  techStackViewMore = () => {
    this.setState({techStack: {...this.state.techStack, viewMore: true, listLimit: 100}})
  };


  static openMail() {
    window.location.href = `mailto:${email}`;
  }

  static openLinkInTab(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <Layout>

        {/* LANDING SECTION */}

        <section id="landing-section" className="section fixed-nav-padding first-section">
          <div className="container format-text">

            <h1 className="primary-font-color code-font" ref={r => this.greeting = r}>{home.greeting}</h1>

            <h1 className="title-text bright-font-color title-text" ref={r => this.title = r}>{home.name}</h1>

            <h1 className="title-text dull-font-color" ref={r => this.subtitle = r}>{home.title}</h1>

            <p className="default-text dull-font-color" ref={r => this.summary = r}
               dangerouslySetInnerHTML={{__html: home.summary}}></p>

            <div className="button-wrapper" ref={r => this.button = r}>
              <Button label="Get in touch." size="lg" onClick={Index.openMail}/>
            </div>

          </div>
        </section>


        {/* ABOUT ME SECTION */}
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

        {/* TECH STACK SECTION */}
        <section id="technologies" className="section">
          <div className="container">

            <Divider label={'Tech stack'}/>

            <div className={`columns is-mobile is-multiline ${!this.state.techStack.viewMore && 'tech-ul'}`}>

              <div className="column tech-column bright-font-color" ref={div => this.languages = div}>
                <TechStackCategory
                  title={'Languages'}
                  icon={faCode}
                  fadeItems={!this.state.techStack.viewMore}
                  items={_.slice(techStack.languages, 0, this.state.techStack.listLimit)}
                />
              </div>

              <div className="column tech-column bright-font-color" ref={div => this.frameworks = div}>
                <TechStackCategory
                  title={'Frameworks'}
                  icon={faTools}
                  fadeItems={!this.state.techStack.viewMore}
                  items={_.slice(techStack.frameworks, 0, this.state.techStack.listLimit)}
                />
              </div>

              <div className="column tech-column bright-font-color" ref={div => this.libraries = div}>
                <TechStackCategory
                  title={'Libraries'}
                  icon={faBook}
                  fadeItems={!this.state.techStack.viewMore}
                  items={_.slice(techStack.libraries, 0, this.state.techStack.listLimit)}
                />
              </div>
              <div className="column tech-column bright-font-color" ref={div => this.databases = div}>
                <TechStackCategory
                  title={'Databases'}
                  icon={faDatabase}
                  fadeItems={!this.state.techStack.viewMore}
                  items={_.slice(techStack.databases, 0, this.state.techStack.listLimit)}
                />
              </div>

              <div className="column tech-column bright-font-color" ref={div => this.others = div}>
                <TechStackCategory
                  title={'Other'}
                  icon={faTerminal}
                  fadeItems={!this.state.techStack.viewMore}
                  items={_.slice(techStack.other, 0, this.state.techStack.listLimit)}
                />
              </div>

            </div>

            {!this.state.techStack.viewMore && (
              <div className="container has-text-centered">
                <Button label={'View all'} size='md' onClick={this.techStackViewMore}/>
              </div>
            )}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="container">

            <Divider label={'Experience'}/>

            <JobContainer />

          </div>
        </section>


        {/* FOOTER SECTION*/}
        <Footer/>


        {/*  END OF LINE :() */}
      </Layout>
    )
  }
}

export default Index;
