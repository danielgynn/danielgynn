import React from 'react';
import {graphql} from "gatsby";

import { useMapbox } from '../../hooks/use-mapbox';

const Activity = ({
    activity
}) => {
    const mapUrl = useMapbox(activity.map.summary_polyline);

    return (
        <img src={mapUrl} alt={`Run Map ${activity.start_sate_formatted}`} />
    )
}

export default Activity;

export const query = graphql`
    fragment ActivityFragment on StravaActivity {
        id
        activity {
            id
            type
            start_latlng
            start_date
            start_date_formatted: start_date(formatString: "DD MMMM YYYY")
            moving_time
            distance
            average_speed
            map {
                summary_polyline
            }
        }
    }
`