import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Terminal from "../components/Terminal"

const IndexPage = ({ data }) => (
  <Layout >
    <div className="about-page">
    <SEO title="Home" />
    <Terminal data={data.terminal}/>
    </div>
    
  </Layout>
)

export default IndexPage;

export const query = graphql`
{
  terminal: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/index/"}}
    ) {
    edges {
      node {
        frontmatter {
          type
          command1
          command2
          name
          description
        }
      }
    }
  }
}
`