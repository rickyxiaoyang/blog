import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/shared/Layout";
import { PostsList } from "../components/posts/PostsList";
import { SEO } from "../components/shared/SEO";

const IndexPage = ({ data }: PageProps<Queries.AllPostsQuery>) => {
	return (
		<Layout>
			<PostsList
				posts={data.allMarkdownRemark.nodes.map((node: any) => ({
					...node.frontmatter,
					slug: node.fields.slug,
				}))}
			/>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

export const pageQuery = graphql`
	query AllPosts {
		allMarkdownRemark {
			nodes {
				fields {
					slug
				}
				frontmatter {
					date(formatString: "MM/DD/YYYY")
					dateString: date(formatString: "MMMM DD, YYYY")
					title
					seoTitle
					categories
					image
				}
			}
		}
	}
`;
