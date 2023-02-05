import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components/shared/Layout";
import "./post.scss";

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
		<Layout>
			<div>
				<PostLayout>
					<div className="post-header">
						<h1>{frontmatter.title}</h1>
						<span className="date-text">{frontmatter.date}</span>
					</div>
					<div className="post-body">
						<div
							className="markdown"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</PostLayout>
			</div>
		</Layout>
	);
}

function PostLayout({ children }: { children: React.ReactNode }) {
	return <div className="post-container">{children}</div>;
}

export const pageQuery = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;
