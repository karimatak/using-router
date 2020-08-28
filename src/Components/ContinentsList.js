import React, {useContext} from 'react';
import '../App.css';
import Continents from './Continents'

import {ContinentContext} from '../Context/ContinentContext'

function ContinentsList() {

  const [data, isLoading, error] = useContext(ContinentContext);
  
  if (isLoading) {
      return <p>Loading ...</p>;
  }
  
  if (error) {
     return <p>error fetching data</p>;
  }

  return (
    <div className="page">
        <h1>Continents Page</h1>
        {data.map(continent => (
            <Continents continentId={continent.ContinentId} name={continent.ContinentName} />
        ))}
    </div>
  );
}

export default ContinentsList;