import React, {Component} from 'react';
import propTypes from 'prop-types';
import Layout from "../components/Layout/Layout";


class Tutorials extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all',
      tabs: [
        {
          name: 'all',
          label: "All"
        },
        {
          name: "algorithms",
          label: "Algorithms & Data Structures",
        },
        {
          name: "designPatterns",
          label: "Design Patterns",
        },
        {
          name: "distributedSystems",
          label: "Distributed Systems",
        },
      ]
    }
  }

  render() {
    return (
      <Layout>

        <section className="section fixed-nav-padding">

          <div className="tabs">
            <ul>
              {this.state.tabs.map(tab => (
                <li className={`${this.state.activeTab === tab.name && 'is-active'}`}>
                  <a onClick={() => this.setState({activeTab: tab.name})}>{tab.label}</a>
                </li>
              ))}
            </ul>
          </div>

        </section>

      </Layout>
    )
  }
}

Tutorials.propTypes = {};

export default Tutorials;

