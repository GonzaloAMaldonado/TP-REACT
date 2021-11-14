import React, {useState, UseEffect} from "react";
import axios from 'axios';
import{
    useParams,
    useHistory,
} from "react-router-dom";

export default function Episode(props) {
    const {id} = useParams();
    const [episode, setEpisode] = useState(null);
    useEffect( () => {
        (async ()=> {const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                                                     .catch(e => {
                                                     console.error("Error!", e);
                                                     setMessage("Ocurrio un error...");
                                                     setEpisode([]);
        });
        if(response.status === 200){
                const episodeInfo = response.data;
                setEpisode(episodeInfo
        );
        }else {
            setEpisode(null);
        }
        })();
        }
        , [id]);
        return <div>
            <h2>Episode ID {id}</h2>;
            {episode && <React.Fragmnet>
                    <h3>Nombre: {episode.name}</h3>
                    <CharactersList character ={episode.characters}/>
                </React.Fragmnet>}
            </div>
    }
    
    
    function CharacterList( { character=[] } ) {
        const history =useHistory();
        const goTo= (url) => {
            const parts = url.split("/");
            console.log(parts)
            const id = parts[parts.length - 1];
            history.push(`/character/${id}`)
        }
    return <div>

         <h4>Personajes </h4>
         <ul>
             {character.map((e, idx) => <li key = {idx} onClick= {goTo}>{e}</li>)}
         </ul>
         </div>
}

export default function FormFilter({ data, onUpdateFilter }) {
    const [filterFields, setFilterFields] = useState({})
    const onChange = (id, value) => {
      filterFields[id] = value;
      setFilterFields({ ...filterFields })
    }
    const handleFilter = () => {
      onUpdateFilter({ ...filterFields });
    }
    const resetFilter = () => {
      let filters = {};
      setFilterFields({});
      onUpdateFilter({});
    }
    const getFilterInput = (filter, index) => {
      switch (filter.type) {
        case "TextField": return <FilterTextField value={filterFields[filter.id] || ""} 
        InputLabelProps={{ shrink: filterFields[filter.id] ? true : false }} key={index} onChange={onChange} id={filter.id} 
        label={filter.label} variant="outlined" />
        default: return null;
      }
    }
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>Filters</div>
        {data.map(getFilterInput)}
        <div>
          <Button onClick={handleFilter} variant="contained" color="primary">
            Filter
        </Button>
          <Button onClick={resetFilter} variant="contained" color="primary">
            Reset
        </Button>
        </div>
      </form>
    );
  }
  const FilterTextField = (props) => {
    const _onChange = event => {
      props.onChange(props.id, event.target.value)
    }
    return (
      <TextField
        {...props}
        onChange={_onChange}
      />
    )
  }