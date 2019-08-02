import React, {Component} from 'react';

import { Columns } from 'react-bulma-components';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Columns>
          <Columns.Column>
            First
          </Columns.Column>
          <Columns.Column>
            Second
          </Columns.Column>
          <Columns.Column>
            Third
          </Columns.Column>
        </Columns>
    )
  }

}

export default Header;
