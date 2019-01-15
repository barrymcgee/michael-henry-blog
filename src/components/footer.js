import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    );
  }
}
