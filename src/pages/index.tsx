import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/shared/Layout";
import { PostsList } from "../components/posts/PostsList";

type PageData = {
	allMarkdownRemark: {
		nodes: {
			fields: {
				slug: string;
			};
			frontmatter: {
				date: string;
				dateString: string;
				title: string;
				seoTitle: string;
				categories: string[];
				image: string;
			};
		};
	};
};

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
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

export const Head: HeadFC = () => <title>Blog - Ricky X. Yang</title>;

export const pageQuery = graphql`
	query MyQuery {
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
