import React, {useEffect,useState} from 'react';
import axios from 'axios';
import EpisodeItem from './EpisodeItem.js';
import Pagination from './Pagination.js';



export default function EpisodeList(props) {
    const [episodes, setEpisode] = useState([]);
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode');
    const [message, setMessage] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect( () => {
        (async ()=> {const response = await axios.get(url)
                                                 .catch(e => {
                                                 console.error("Error!", e);
                                                 setMessage("Ocurrio un error...");
                                                 setEpisode([]);
        });
        if(response && response.status === 200){
            const{info, results} = response.data;
            setInfo(info.count);
            setEpisode([...results,
        ]);
        }else {
        setMessage("Ocurrio un error en el llamado REST");
        setTotal(null);
        setEpisode([]);
    }
    })();
    }
    , [url]);
        
    useEffect(() => {
        console.log("Use Effect!")
    });
}

const onPaginationPressed = (newUrl) => {
    if(newUrl) {
        setUrl(newUrl);
    }

}


    return <React.Fragment>
                {message &&<span>{message}</span>}
            <span> La cantidad de episodios es: {total} </span>
            <Pagination info={info} onPrevPressed={onPaginationPressed} onNextPressed={onPaginationPressed}/>
            <table border= {1}>
                <tr>
                    <th>ID</th><th>Name</th><th>air_date</th><th>episode</th><th>characters</th><th>url</th><th>created</th><th>Ver</th>
                </tr>
                    {episodes.map((c,idx) => <EpisodeItem key={idx} episode={c}/>)}
            </table>
            <Pagination info={info} onPrevPressed={onPaginationPressed} onNextPressed={onPaginationPressed}/>
            
    </React.Fragment>