import React from 'react'
import App, {Container} from 'next/app'

class MyApp extends App {

  // commenting this because it's not used (Opt-out of Automatic Prerendering)

  /*static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }*/

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp;
