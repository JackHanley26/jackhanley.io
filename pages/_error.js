import Layout from '../components/Layout/Layout'
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <section className="container has-text-centered fixed-nav-padding">
          <p className="primary-font-color">
            <span>
            {this.props.statusCode
              ? <span>A server error occurred: <b>{this.props.statusCode}.</b> </span>
              : 'We encountered an error loading this page. '}
              Please try again later.
            </span>
          </p>
        </section>
      </Layout>
    )
  }
}
