import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro/intro"
import PostSheet from "../components/PostSheet/postsheet"

export default function IndexPage(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
        allMdx(sort: { fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                date
                description
                title
              }
              slug
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      {/* siteTitle specifies that the title will the siteTitle alone */}
      <SEO title="siteTitle" />
      <Intro
        siteTitle={site.siteMetadata.title}
        siteDescription={site.siteMetadata.description}
        siteAuthor={site.siteMetadata.author}
      />
      <PostSheet data={site.allMdx} />
    </Layout>
  )
}
