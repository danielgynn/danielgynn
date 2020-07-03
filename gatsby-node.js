const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function getBlogData(graphql) {
	return graphql(
		`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);
}

function getCollections(graphql) {
	return graphql(
		`{
			allCollectionsJson {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/blog-post.js`);

	const allBlogPosts = await getBlogData(graphql);
	const allCollections = await getCollections(graphql);

	if (allBlogPosts.errors) {
		throw allBlogPosts.errors;
	} else {
		const posts = allBlogPosts.data.allMarkdownRemark.edges;

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;
	
			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			});
		});
	}

	if (allCollections.error) {
		throw allCollections.error;
	}

	allCollections.data.allCollectionsJson.edges.forEach(edge => {
		const collection = edge.node;

		createPage({
			path: `/photography/${collection.slug}/`,
			component: require.resolve('./src/templates/photo-collection.jsx'),
			context: {
				slug: collection.slug
			},
		});
	});
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
}
