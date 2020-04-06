import React, { Component } from 'react';
import InstaFeed from 'instafeed.js';

import { rhythm } from '../utils/typography';

const instaFeed = new InstaFeed({
	accessToken: '244718663.1677ed0.007e2acb0e424789a504618cee9f4169',
	get: 'user',
	userId: '244718663',
	sortBy: 'most-recent',
	limit: '6',
	resolution: 'standard_resolution'
});

export default class InstagramFeed extends Component {
    componentDidMount() {
		instaFeed.run();
    }

    render() {
        return (
			<div>
                <h3 style={ {marginBottom: 0} }>Recent Photos</h3>
                <div style={ {marginTop: `${rhythm(1)}`} } id='instafeed' className='instafeed'></div>
				<p>View more on <a href='https://instagram.com/danielgynn' target='_blank' rel='noopener noreferrer'>Instagram →</a></p>
            </div>
        )
    }
}