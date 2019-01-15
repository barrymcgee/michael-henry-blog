import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class componentName extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>{markdownRemark.timeToRead} minute read</p>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;
