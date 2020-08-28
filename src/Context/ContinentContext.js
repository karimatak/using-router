import React, {useState, createContext} from 'react';
import {useDataFetcher} from '../Common_Functions/functions';
import moduleName from '../Components/ContinentsList'
import ContinentsList from '../Components/ContinentsList';

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