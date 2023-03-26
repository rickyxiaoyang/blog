import * as dt from "date-fns";
import path from "path";

function convertToSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
}

exports.onCreateNode = ({ node, actions }: any) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const { title, date } = node.frontmatter;
		const dateString = dt.format(new Date(date), "yyyy-MM-dd");
		const customSlug = convertToSlug(title);
		const url = `/post/${dateString}/${customSlug}`;
		createNodeField({
			node,
			name: `slug`,
			value: url,
		});
	}
};

exports.createPages = async function ({ actions, graphql }: any) {
	const { data }: { data: Queries.AllSlugsQuery } = await graphql(`
		query AllSlugs {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							published
						}
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.edges.forEach((edge) => {
		const slug = edge.node.fields?.slug;
		const published = edge.node.frontmatter?.published;
		if (published && !!slug) {
			actions.createPage({
				path: slug,
				component: path.resolve(`./src/pages/post/post.tsx`),
				context: { slug: slug },
			});
		}
	});
};
