import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../../components/shared/Layout";
import { SEOHelmet } from "../../components/shared/SEO";
import "./post.scss";

export default function PostTemplate({
	data: { markdownRemark },
}: PageProps<Queries.PostTemplateQuery>) {
	const frontmatter = markdownRemark?.frontmatter;
	const html = markdownRemark?.html;
	if (!frontmatter || !html) return;
	const { title, date, image } = frontmatter;

	const siteTitle: string = `${title} - Blog | Ricky X. Yang`;
	return (
		<>
			<SEOHelmet title={siteTitle} />
			<Layout>
				<div>
					<PostLayout>
						<div className="post-header">
							<h1>{title}</h1>
							<span className="date-text">{date}</span>
							<div
								className="post-image"
								style={{ backgroundImage: `url(${image})` }}
							></div>
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
		</>
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
				image
			}
		}
	}
`;
