import React, {useState, createContext} from 'react';
import {useDataFetcher} from '../services/functions';
import moduleName from '../Components/continent/ContinentsList'
import ContinentsList from '../Components/continent/ContinentsList';

const CONTINENTS_URL = 'https://localhost:5001/api/Continents';

export const ContinentContext = createContext();

export const ContinentProvider = (props) => {
  const {data, isLoading, error} = useDataFetcher(CONTINENTS_URL);

    return (
    <ContinentContext.Provider value={[data, isLoading, error]}>
        {props.children}
    </ContinentContext.Provider>
    )
}


//common functions // services