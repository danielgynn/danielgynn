module.exports = {
	siteMetadata: {
		initials: 'DG',
		title: `Daniel Gynn`,
		author: `Daniel Gynn`,
		email: 'danielgynn94@gmail.com',
        description: `
            Daniel is a frontend engineer and product designer with over five years of professional experience and a degree in Computer Science.
        `,
		siteUrl: `https://danielgynn.me/`,
		social: {
			twitter: `https://twitter.com/danielgynn`,
			instagram: `https://instagram.com/danielgynn`,
			linkedin: 'https://linkedin.com/in/danielgynn',
			goodreads: 'https://www.goodreads.com/user/show/31069417-daniel-gynn'
        },
        pages: [
            {title: 'About', link: '/'},
            {title: 'Work', link: '/work/'},
            {title: 'Photography', link: '/photography/'}
        ]
	},
	plugins: [
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/copy`,
				name: `copy`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/collections`,
				name: `collections`,
			},
		},
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
				background_color: `#222831`,
				theme_color: `#f2a365`,
				display: `danielgynn`,
				icon: `content/assets/icon.png`,
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
        {
            resolve: `gatsby-source-instagram`,
            options: {
                username: `244718663`,
                maxPosts: 10,
                paginate: 10
            },
          },
	],
}
