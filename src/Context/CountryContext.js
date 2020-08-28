import React, {useState, createContext} from 'react';
import {useDataFetcher} from '../Common_Functions/functions';

const COUNTRIES_URL = 'https://localhost:5001/api/Countries';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const {data, isLoading, error} = useDataFetcher(COUNTRIES_URL);

    return (
    <CountryContext.Provider value={[data, isLoading, error]}>
        {props.children}
    </CountryContext.Provider>
    )
}