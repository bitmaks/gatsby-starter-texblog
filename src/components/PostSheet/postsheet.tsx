import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from "../PostCard/postcard"
import "./postsheet.scss"

export const usePostQuery = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query PostQuery {
        allMdx(filter: { fileAbsolutePath: { regex: "/content/posts/" } }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  return allMdx
}

export default function PostSheet({ data }) {
  const allMdx = usePostQuery()
  if (!allMdx)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
        No posts found.
      </h2>
    )
  return (
    <>
      <section className="Posts">
        {allMdx.edges.map(post => (
          <div className="Post">
            <div className="Post__title">{post.node.frontmatter.title}</div>
            <div className="Post__description">{post.node.frontmatter.description}</div>
          </div>
        ))}
      </section>
    </>
  )
}