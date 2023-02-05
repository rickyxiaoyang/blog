import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Blog`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	graphqlTypegen: true,
	plugins: [
		// "gatsby-plugin-google-gtag",
		"gatsby-transformer-remark",
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "./src/posts/",
			},
			__key: "posts",
		},
	],
};

export default config;
