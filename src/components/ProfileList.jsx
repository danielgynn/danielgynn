import React, { Component } from 'react';

import { rhythm } from '../utils/typography';

export default class ProfileList extends Component {
    render() {
        const { title, list } = this.props;

        return (
            <div>
				<h3 style={ {marginBottom: 0} }>{ title }</h3>

                { list && list.map((item, index) => (
                    <div style={ {marginTop: `${rhythm(.5)}`} } key={ index }>
                        <p style={ {margin: '0'} }>
                            { item.link || item.linkText ? `${ item.text }, ` : item.text }
                            { item.link && (<a target="_blank" rel="noopener noreferrer" href={ item.link }>{ item.linkText }</a>) }
                            { !item.link && item.linkText && item.linkText }
                        </p>
                        { item.sub && (
                            <p style={ {margin: '0', fontStyle: 'italic'} }>{ item.sub }</p>
                        ) }
                    </div>
                )) }
				
			</div>
        )
    }
}