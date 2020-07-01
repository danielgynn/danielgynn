module.exports = {
	siteMetadata: {
		initials: 'DG',
		title: `Daniel Gynn`,
		author: `Daniel Gynn`,
		email: 'danielgynn94@gmail.com',
		description: `Daniel is a frontend engineer and product designer with over four years of professional experience and a degree in Computer Science.`,
		mainDescription: `
			Hey there — I'm a frontend engineer and product designer with over five years of professional experience and a degree in computer science, specialising in React/Redux stacks.
			I've worked in various industries, including: artificial intelligence, healthcare, and genomics.
			I became involved in frontend engineering as the perfect way to blend my interests in engineering principles and utilising my keen eye for design.
		`,
		siteUrl: `https://danielgynn.com/`,
		social: {
			twitter: `https://twitter.com/danielgynn`,
			instagram: `https://instagram.com/danielgynn`,
			linkedin: 'https://linkedin.com/in/danielgynn',
			goodreads: 'https://www.goodreads.com/user/show/31069417-daniel-gynn'
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
				{
					resolve: `gatsby-remark-images`,
					options: {
						maxWidth: 590,
					},
				},
				{
					resolve: `gatsby-remark-responsive-iframe`,
					options: {
						wrapperStyle: `margin-bottom: 1.0725rem`,
					},
				},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Daniel Gynn`,
				short_name: `Daniel Gynn`,
				start_url: `/`,
				background_color: `#f9f8f6`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
