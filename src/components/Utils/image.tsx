import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
This is a custom Image component which automatically
indexes all images in the src/images directory.
Simply feed in the fileName prop
(optional className and altText props)
and the image will be rendered!
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
