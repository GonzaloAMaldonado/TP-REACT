import React from 'react';
import {
    useHistory,
} from 'react-router-dom;'


export default function EpisodeItem ({Episode}) {
    const history = useHistory();
    
    const goTo = () => {
        history.push(`episode/${episode.id}`);
    };

return <React.Fragment>
        <tr style= {{backgroundColor}}>
            <td>{episode.id}</td>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
            <td>{episode.episode}</td>
            <td>{episode.characters}</td>
            <td>{episode.url}</td>
            <td>{episode.created}</td>
            <a onClick={goTo} >Ver</a>
        </tr>


</React.Fragment>
}