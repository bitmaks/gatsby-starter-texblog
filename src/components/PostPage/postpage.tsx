import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../Layout/layout"
import SEO from "../Utils/seo"
import truncateText from "../Utils/truncateText"
import dateInEnglish from "../Utils/dateInEnglish"
const shortcodes = { Link }

import "./postpage.scss"

export default function PostPage({ data: { mdx } }) {
	console.log(mdx)
	return (
		<Layout>
			<SEO
				title={truncateText(mdx.frontmatter.title, 17)}
				description={mdx.frontmatter.description}
			/>
			<article className="PostPage" id={mdx.id}>
				<h1 className="PostPage__title">{mdx.frontmatter.title}</h1>
				<h3 className="PostPage__date">
					{dateInEnglish(mdx.frontmatter.date)}
				</h3>
				<MDXProvider components={shortcodes} className="test">
					<MDXRenderer>{mdx.body}</MDXRenderer>
				</MDXProvider>
				<a
					onClick={() => {
						window.scrollTo(0, 0)
					}}
					className="PostPage__topbutton"
					title="Go to top of page"
				>
					↑
				</a>
			</article>
		</Layout>
	)
}
export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				description
				date
			}
		}
	}
`
