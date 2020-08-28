import React ,{useContext } from 'react';
import '../App.css';
import Countries from './Countries'

import {CountryContext} from '../Context/CountryContext';
//test
// import {ContinentContext} from '../Context/ContinentContext';
//
function CountriesList() {
  
  const [data, isLoading, error] = useContext(CountryContext);
  // test
  // const [continent, cisLoading, cerror] = useContext(ContinentContext);
  //
  if (isLoading) {
      return <p>Loading ...</p>;
  }
  
  if (error) {
     return <p>error fetching data</p>;
  }
  
  return (
    <div className="page">
        <h1>Countries Page</h1>
        {data.map(country => (
            <Countries id={country.CountryId} name={country.CountryName} continent={country.continent.continentName}/>
        ))}
    </div>
  );
}

export default CountriesList;
