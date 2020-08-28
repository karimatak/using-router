import React, {useState, createContext} from 'react';
import {useDataFetcher} from '../Common_Functions/functions';

const EVENTS_URL = 'https://localhost:5001/api/Events';

export const EventContext = createContext();

export const EventProvider = (props) => {
  const {data, isLoading, error} = useDataFetcher(EVENTS_URL);

    return (
    <EventContext.Provider value={[data, isLoading, error]}>
        {props.children}
    </EventContext.Provider>
    )
}