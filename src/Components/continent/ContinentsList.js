import React, {useContext, useState, useEffect} from 'react';
import '../../App.css';
import Continents from './Continents'

import {ContinentContext} from '../../Context/ContinentContext'

//
import ContinentDataService from '../../services/ContinentDataService'
import {Link} from 'react-router-dom';
//
function ContinentsList() {

  // const [data, isLoading, error] = useContext(ContinentContext);
  
  // if (isLoading) {
  //     return <p>Loading ...</p>;
  // }
  
  // if (error) {
  //    return <p>error fetching data</p>;
  // }

  const [continent, setContinent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return retrieveContinents();
  }, [])

  const retrieveContinents = () => {
    setIsLoading(true);
    ContinentDataService.getAll()
      .then(response => {
        console.log('data', response.data)
        setContinent(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      })
  }

  const deleteContinent = (id) =>{

    ContinentDataService.remove(id)
        .then(response => {
            console.log(response.data);
            retrieveContinents();
        })
        .catch(e => {
            console.log(e);
        })
}


  if (isLoading) {
    return <p>Loading ...</p>;
  }
  
  if (error) {
     return <p>error fetching data</p>;
  }

  return (
    <div className="page">
        <h1>Continents Page</h1>
        <Link className="btn btn-primary" to="/continents/add">
          Add Continent
        </Link>
        {continent.map(continent => (
            <Continents continentId={continent.ContinentId} name={continent.ContinentName} summary={continent.Summary} deleteContinent={deleteContinent} />
        ))}
    </div>
  );
}

export default ContinentsList;