import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function renderImage(file, className, altText) {
	return (
		<Img
			className={className}
			fluid={file.node.childImageSharp.fluid}
			alt={altText ? altText : ""}
		/>
	)
}

const Image = function (props) {
	return (
		<StaticQuery
			query={graphql`
				query {
					images: allFile(
						filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
					) {
						edges {
							node {
								extension
								relativePath
								childImageSharp {
									fluid(maxWidth: 1000) {
										...GatsbyImageSharpFluid
									}
								}
								extension
								publicURL
							}
						}
					}
				}
			`}
			render={({ images }) =>
				renderImage(
					images.edges.find(image => image.node.relativePath === props.fileName),
					props.className,
					props.alt
				)
			}
		/>
	)
}

Image.propTypes = {
	fileName: PropTypes.string.isRequired,
	className: PropTypes.string,
	alt: PropTypes.string
}

export default Image

// const Image = () => {
// 	const data = useStaticQuery(graphql`
// 		query {
// 			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
// 				childImageSharp {
// 					fluid(maxWidth: 300) {
// 						...GatsbyImageSharpFluid
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

// export default Image
