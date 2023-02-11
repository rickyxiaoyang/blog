import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Blog | Ricky X. Yang`,
		description: "A lifestyle / tech blog, by Ricky Yang.",
		siteUrl: `https://blog.rickyxiaoyang.com`,
	},
	graphqlTypegen: true,
	plugins: [
		// "gatsby-plugin-google-gtag",
		"gatsby-transformer-remark",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
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
