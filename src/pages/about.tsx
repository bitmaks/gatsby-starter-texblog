import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section className="About">
				<h1>About</h1>
				<p>
					Hello, I'm Akshat!
					<br />
					<br />
					This is a project I decided to work on as I had planned to publish
					some typeset work on a blog and I realised that there weren't too many
					Gatsby starters with a focus on LaTeX, so I decided to create TeXBlog:
					my first Gatsby starter which is centered around the simplicity and
					elegance of typesetting.
					<br />
					<br />
					If you'd like to check out more of my projects please visit{" "}
					<a
						href="http://akshatbisht.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						my website
					</a>{" "}
					or if you'd like to get in touch{" "}
					<a
						href="mailto:hello@akshatbisht.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						click here for my email
					</a>
					<br />
					<br />
					Thank you very much and I hope you enjoy this starter!
					<br />
					<br />
					<br />
					<br />
					- Akshat
				</p>
			</section>
		</Layout>
	)
}
