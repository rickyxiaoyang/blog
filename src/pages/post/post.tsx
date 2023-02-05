import * as React from "react";
import { graphql } from "gatsby";

type PageData = {
	data: {
		markdownRemark: {
			frontmatter: {
				title: string;
				date: string;
			};
			html: any;
		};
	};
};

export default function PostTemplate({
	data: {
		markdownRemark: { frontmatter, html },
	},
}: PageData) {
	return (
		<div>
			<div>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	);
}

export const pageQuery = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`;
