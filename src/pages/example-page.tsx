import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section>
				<h1>Example Page</h1>
				<h4>What are you waiting for? Fill it up with your own content!</h4>
			</section>
		</Layout>
	)
}
