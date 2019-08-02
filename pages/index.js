import React, {Component, Fragment} from 'react';
import Layout from "../components/Layout/Layout";

class Index extends Component {

  constructor(props) {
    super(props);
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
          <div className="container">
            <div className="columns">
              <div className="column">first</div>
              <div className="column">second</div>
              <div className="column">third</div>
            </div>
            <h1 className="title">Hi, My name is Mr. Blah</h1>
            {/*<h1 className="title">Hello World from <a href="https://nextjs.org/">Next.js</a> and <a href="https://bulma.io/">Bulma</a>!</h1>*/}
          </div>
        </section>

        <section className="section hero is-primary">
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


      </Layout>
    )
  }
}

export default Index;
