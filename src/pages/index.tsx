import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"
import Intro from "../components/Intro/intro"
import Posts from "../components/Posts/posts"

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
			<Posts />
		</Layout>
	)
}
