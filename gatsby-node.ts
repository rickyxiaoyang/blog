import * as dt from "date-fns";
import path from "path";

function convertToSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
}

exports.createPages = async function ({ actions, graphql }: any) {
	const { data } = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	data.allMarkdownRemark.edges.forEach((edge: any) => {
		const slug = edge.node.fields.slug;
		actions.createPage({
			path: slug,
			component: path.resolve(`./src/pages/post/post.tsx`),
			context: { slug: slug },
		});
	});
};

exports.onCreateNode = ({ node, actions }: any) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const date = dt.format(new Date(node.frontmatter.date), "yyyy-MM-dd");
		const customSlug = convertToSlug(node.frontmatter.title);
		const url = `/post/${date}/${customSlug}`;
		createNodeField({
			node,
			name: `slug`,
			value: url,
		});
	}
};
