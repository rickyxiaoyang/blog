import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../../components/shared/Layout";
import "./post.scss";

export default function PostTemplate({
	data: {
		markdownRemark: {
			frontmatter: { title, date },
			html,
		},
	},
}: PageProps<Queries.PostTemplateQuery>) {
	return (
		<Layout>
			<div>
				<PostLayout>
					<div className="post-header">
						<h1>{title}</h1>
						<span className="date-text">{date}</span>
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
	query PostTemplate($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;
