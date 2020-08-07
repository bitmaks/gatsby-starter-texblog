import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./layout.scss"
import "../../styles/globals.scss"

export default function Layout({ children }) {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`)

	return (
		<>
			<div className="Layout">
				<Header
					className="Layout__header"
					siteTitle={data.site.siteMetadata.title}
				/>
				<main className="Layout__children">{children}</main>
				<Footer
					className="Layout__footer"
					siteTitle={data.site.siteMetadata.title}
					siteAuthor={data.site.siteMetadata.author}
				/>
			</div>
		</>
	)
}
