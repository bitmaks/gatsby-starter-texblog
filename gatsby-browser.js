/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "katex/dist/katex.min.css"

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"

const loadExternalStyles = url => {
	const styles = document.createElement("link")
	styles.rel = "stylesheet"
	styles.href = url
	styles.type = "text/css"
	document.head.appendChild(styles)
}

export const onClientEntry = () => {
	window.onload = () => {
		loadExternalStyles(
			// Load cm-webfonts
			"https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts.css"
		)
	}
}

// Credits: https://github.com/kunalJa/gatsby-starter-math-blog
const component = {
	pre: props => {
		const className = props.children.props.className || ""
		const matches = className.match(/language-(?<lang>.*)/)
		return (
			<Highlight
				{...defaultProps}
				code={props.children.props.children}
				language={
					matches && matches.groups && matches.groups.lang
						? matches.groups.lang
						: ""
				}
				theme={github}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className + " overflow-auto"} style={style}>
						{tokens.map((line, i) => {
							if (i === tokens.length - 1) {
								return null
							}
							return (
								<div {...getLineProps({ line, key: i })}>
									{line.map((token, key) => {
										return <span {...getTokenProps({ token, key })} />
									})}
								</div>
							)
						})}
					</pre>
				)}
			</Highlight>
		)
	},
}
export const wrapRootElement = ({ element }) => {
	return <MDXProvider components={component}>{element}</MDXProvider>
}
