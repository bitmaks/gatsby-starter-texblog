const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === "Mdx") {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: "slug",
			node,
			value: `/posts${value}`,
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	// Destructure the createPage function from the actions object
	const { createPage } = actions
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}

	const posts = result.data.allMdx.edges
	posts.forEach(({ node }, index) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/components/PostPage/postpage.tsx`),
			// You can use the values in this context in
			// our page layout component
			context: { id: node.id },
		})
	})
}
