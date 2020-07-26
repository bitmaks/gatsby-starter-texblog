import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./postdisplay.scss"

export default function Posts() {
  const { posts } = useStaticQuery(
    graphql`
      query Posts {
        prismic {
          allPosts {
            edges {
              node {
                body
                date
                title
              }
            }
          }
        }
      }
    `
  )

  console.log({ posts })
  if (!posts)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
        No posts found.
      </h2>
    )
  return (
    <>
      <section className="Posts"></section>
    </>
  )
}
