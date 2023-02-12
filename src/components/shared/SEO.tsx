import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Helmet } from "react-helmet";

// Duplication: for some reason, Helmet isn't nesting these elements into it.
export const SEOHelmet = ({
	title,
	description,
	pathname,
	image,
	children,
}: any) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image: defaultImage,
		siteUrl,
	} = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname || ``}`,
	};

	return (
		<Helmet>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:title" name={`og:title`} content={seo.title} />
			<meta
				property="og:description"
				name={`og:description`}
				content={seo.description}
			/>
			<meta property="og:type" name={`og:type`} content={`website`} />
			<meta
				property="og:image"
				name={`og:image`}
				content="https://user-images.githubusercontent.com/32840398/218319767-ed906ea8-d1b7-4e9b-ba38-a3994f4c0fff.jpg"
			/>
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			{children}
		</Helmet>
	);
};

export const SEO = ({ title, description, pathname, image, children }: any) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image: defaultImage,
		siteUrl,
	} = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname || ``}`,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:title" name={`og:title`} content={seo.title} />
			<meta
				property="og:description"
				name={`og:description`}
				content={seo.description}
			/>
			<meta property="og:type" name={`og:type`} content={`website`} />
			<meta
				property="og:image"
				name={`og:image`}
				content="https://user-images.githubusercontent.com/32840398/218319767-ed906ea8-d1b7-4e9b-ba38-a3994f4c0fff.jpg"
			/>
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			{children}
		</>
	);
};
